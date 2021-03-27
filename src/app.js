const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const routes = require('./routes')
const database = require('./config/database')
const Config = require('./config/config')
const logger = require('./config/logger')

const app = express()

const configureExpress = () => {
  app.use(cors()) // https://github.com/expressjs/cors
  app.use(helmet()) // https://helmetjs.github.io/
  app.use(express.json())
  app.use(
    morgan('common', {
      stream: {
        write: message => {
          logger.info(message)
        }
      }
    })
  )
  app.use(Config.API_BASE, routes)
  return app
}

module.exports = () => database().then(configureExpress)
