// const mongoose = require('mongoose')
const serverless = require('serverless-http')
const app = require('./express-app')

module.exports.handler = serverless(app)