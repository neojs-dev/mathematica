const isNumber = require('is-number');

module.exports = function math(x, operator, y) {
  if (!isNumber(x)) {
    throw new Error('Expected the first operand to be a number.');
  }

  if (!isNumber(y)) {
    throw new Error('Expected the second operand to be a number.');
  }

  return Number(operator(x, y))
}
