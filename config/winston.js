const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file')
const moment = require('moment')

const dateFormat = function () {
  return moment().format('YYYY-MM-DD HH:mm:ss:SSS')
}

const consoleTransport = new (winston.transports.Console)({
  timestamp: dateFormat,
  level: 'error',
  colorize: true,
  prettyPrint: true,
  stringify: true,
  silent: false,
  json: false
})

const allLoggerTransport = new DailyRotateFile({
  name: 'all',
  filename: './log/winston.log',
  timestamp: dateFormat,
  level: 'error',
  colorize: true,
  maxsize: 1024 * 1024 * 5,
  datePattern: '.yyyy-MM-dd'
})

const Transport = [consoleTransport]

Transport.push(allLoggerTransport)

module.exports = new (winston.Logger)({
  transports: Transport
})
