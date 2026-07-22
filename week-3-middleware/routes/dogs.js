const express = require("express")
const dogs = require("../dogData")
const { ValidationError, NotFoundError } = require("../error")

const router = express.Router()

router.get("/dogs", (req, res) => {
  res.status(200).json(dogs)
})

router.post("/adopt", (req, res) => {
  const { name, dogName, email } = req.body

  if (!name || !email || !dogName) {
    throw new ValidationError("Missing required fields")
  }

  const dog = dogs.find((d) => d.name === dogName)
  if (!dog) {
    throw new NotFoundError(
      `Dog with name ${dogName} not found or not available`,
    )
  }
  if (dog.status !== "available") {
    throw new NotFoundError(
      `Dog with name ${dogName} not found or not available`,
    )
  }
  res.status(201).json({
    message: `Adoption request received. We will contact you at ${email} for further details.`,
    application: {
      name,
      email,
      dogName,
      applicationId: Date.now(),
    },
  })
})

router.get("/error", (req, res, next) => {
  next(new Error("Test error"))
})

module.exports = router
