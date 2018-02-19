var assert = require("assert");
var Rat = require("../rat.js");
var Food = require("../food.js");

describe("Rat Tests", function(){

  let rat;
  let food;

  beforeEach("Setup", function(){
    rat = new Rat("Pantegano");
    food = new Food("Raspberry", 7);

  })

  it("should have a name", function(){
    assert.strictEqual(rat.name, "Pantegano");
  })

  it("should be able to touch the food", function(){
    rat.touchFood(food);
    assert.strictEqual(food.replenishmentValue, -7);
  })
})
