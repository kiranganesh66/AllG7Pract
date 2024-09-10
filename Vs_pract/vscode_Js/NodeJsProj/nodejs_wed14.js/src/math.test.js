let {it } = require("node:test");
let { divide, multiple, minus, plus } = require("./simple-math");
let { assertEqual } = require("./assert");
let assert = require("assert");

var x = 10;

var y = 5;

it.only("plus is here", function () {
  var result = plus(x, y);
  assert.equal(x + y, result);
});

it("minus is here", function () {
  var result = minus(x, y);
  assert.equal(x - y, result);
});
it("divide is here", function () {
  var result = divide(x, y);
  assert.equal(x / y, result);
});
it("multiple is here", function () {
  var result = multiple(x, y);
  assert.equal(x * y, result);
});
