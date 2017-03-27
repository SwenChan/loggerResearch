const logger = require('../config/bunyan')

function test (str) {
  logger.error(str)
}

test('buyan test')
