const express = require("express")
const userController = require("../controllers/userController")

const userRouter = express.Router()

userRouter.post("/register", userController.register)
userRouter.post("/logon", userController.logon)
userRouter.post("/logoff", userController.logoff)

module.exports = userRouter
