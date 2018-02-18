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

  it("should have a favourite food", function(){
    assert.strictEqual(hero.favouriteFood, "Chicken");
  })

  it("should be able to say his name", function(){
    assert.strictEqual(hero.talk(), "My name is Sarazor")
  })

  it("shouldn't have task at the beginning", function(){
    assert.deepEqual(hero.getTasks(), []);
  })












})
