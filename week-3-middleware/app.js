const express = require("express")
const { randomUUID } = require("crypto")

const dogsRouter = require("./routes/dogs")

const app = express()

function errorHandler(err, req, res, next) {
  console.error(err)
  res.status(500).json({
    requestId: req.requestId,
    error: "Internal Server Error",
  })
  next(err)
}

function notFound(req, res) {
  res.status(404).json({
    requestId: req.requestId,
    error: `Route not found`,
  })
}

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}]: ${req.method} ${req.path} (${req.requestId})`,
  )
  next()
}

// Assignment 3b and 3c ask you to add middleware in this file.
app.use(express.json())
app.use(express.static("week-3-middleware/public"))

app.use((req, res, next) => {
  req.requestId = randomUUID()
  res.setHeader("X-Request-Id", req.requestId)
  res.setHeader("X-App-Name", "Node Homework")
  next()
})
app.use(logger)

app.use("/", dogsRouter) // Do not remove this line
app.use(notFound)
app.use(errorHandler)

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Dog rescue app is listening on port 3000...")
  })
}

module.exports = app
