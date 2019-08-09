const test = require('tape')
const math = require('./index')

test('plus', function(t) {
  function plus(x, y) {
    return x + y
  }
  const result = math(2, plus, 2)
  t.equal(result, 4)
  t.end()
})

test('minus', function(t) {
  function minus(x, y) {
    return x - y
  }
  const result = math(2, minus, 2)
  t.equal(result, 0)
  t.end()
})

test('times', function(t) {
  function times(x, y) {
    return x * y
  }
  const result = math(2, times, 2)
  t.equal(result, 4)
  t.end()
})

test('divide', function(t) {
  function divide(x, y) {
    return x / y
  }
  const result = math(2, divide, 2)
  t.equal(result, 1)
  t.end()
})

test('type checking', function (t) {
  function add (x, y) { 
    return x + y
  }

  t.throws(function () {
    math({}, add, 2)
  }, 'The first operand must be a number.')

  t.throws(function () {
    math(2, add, {})
  }, 'The second operand must be a number.')

  t.end()
})

