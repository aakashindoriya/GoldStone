require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connect = require("./config/connect.db")
const userRoute = require("./routes/user.routes")
const app = express()
app.use(cors())
app.use(express.json())

app.use("/user", userRoute)


app.listen(8080, () => {
    connect()
    console.log(`listenning on : 8080`);
})