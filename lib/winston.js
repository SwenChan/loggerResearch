const logger = require('../config/winston')

function test (str) {
  logger.error(str)
}

test('winston test')
