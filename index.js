module.exports = function math(x, operator, y) {
  return Number(operator(x, y))
}
