var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero Tests", function(){

  let hero;

  beforeEach("Setup", function(){
    hero = new Hero("Sarazor", 100, "Chicken");
  })

  it("should have a name", function(){
    assert.strictEqual(hero.name, "Sarazor");
})

  it("should have a health", function(){
    assert.strictEqual(hero.health, 100);
  })

  it("should ahave a favourite food", function(){
    assert.strictEqual(hero.favouriteFood, "Chicken");
  })

})
