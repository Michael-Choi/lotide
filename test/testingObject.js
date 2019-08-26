const assert = require("chai").assert;
const lotide = require("../index");

describe("#testing functions in the object", () => {
  it("should run assertArraysEqual when called", () => {
    assert.isTrue(lotide.assertArraysEqual([2, 3, 1], [2, 3, 1]));
  });
});
