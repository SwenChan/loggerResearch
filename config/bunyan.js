const buyan = require('bunyan')
const RotatingFileStream = require('bunyan-rotating-file-stream')

const config = {
  name: 'buyanTest',
  src: true,
  streams: [
    {
      level: 'error',
      stream: process.stdout
    },
    {
      level: 'error',
      stream: new RotatingFileStream({
        path: './log/bunyan.%Y%m%d%H%M%S.log',
        period: '5ms',
        gzip: true,
        rotateExisting: true,
        startNewFile: true
      })
    }
  ]
}

const logger = buyan.createLogger(config)

module.exports = logger
