const express = require("express")
const { ADDUSERS, ALLUSERS, UPDATEUSER, SINGLEUSER } = require("../controllers/user.controller")

const app = express.Router()

app.get("/adduser", ADDUSERS)
app.get("/", ALLUSERS)
app.post("/update/:id", UPDATEUSER)
app.get("/:id", SINGLEUSER)

module.exports = app