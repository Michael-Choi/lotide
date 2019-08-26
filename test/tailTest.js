let assertEqual = require("../assertEqual");
let tail = require("../tail");
const assert = require("chai").assert;

describe("#Tail testing", () => {
  it("should return array minus first element", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});
