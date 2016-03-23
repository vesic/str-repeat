var expect = require("chai").expect;
var strRepeat = require("./index");

describe("str-repeat", function () {
  var string;
  
  beforeEach(function () {
    string = strRepeat("Hello, world!", 3);
  });

  it("should return 3 times the string passed in", function () {
    expect(string).to.equal("Hello, world!Hello, world!Hello, world!");
  });

  it("should return length multiplied by 3", function () {
    expect(string).to.have.length("Hello, world!".length * 3);
  });
});
