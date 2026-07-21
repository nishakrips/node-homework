const { randomUUID } = require("crypto")

const register = (req, res) => {
  const user = {
    id: randomUUID(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }

  let users = global.users
  users.push(user)
  global.users = users
  global.user_id = user.id

  return res.status(201).json({ name: user.name, email: user.email })
}

const logon = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const user = global.users.filter(
    (usr) => usr.email === email && usr.password === password,
  )[0]
  if (user) {
    global.user_id = user.id
    return res.status(200).json({ name: user.name, email: user.email })
  } else {
    return res.status(401).json({ message: "Invalid email or password" })
  }
}

const logoff = (req, res) => {
  global.user_id = null
  return res.status(200)
}

module.exports = { register, logon, logoff }
