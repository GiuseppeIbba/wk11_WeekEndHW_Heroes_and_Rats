var assert = require("assert");
var Food = require("../food.js");

describe("Food Tests", function(){

  let food;

  beforeEach("Setup", function(){
    food = new Food("Blackberry", 1);
  })

  it("should have a name", function(){
    assert.strictEqual(food.name, "Blackberry");
  })
})
