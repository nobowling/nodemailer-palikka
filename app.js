const express = require("express")
const cors = require("cors")
const mailRouter = require('./mail-router')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use('/api/mail', mailRouter)

module.exports = app
