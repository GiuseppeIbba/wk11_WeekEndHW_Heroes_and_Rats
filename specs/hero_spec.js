var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");

describe("Hero Tests", function(){

  let hero;
  let food1;

  beforeEach("Setup", function(){
    hero = new Hero("Sarazor", 100, "Chicken");
    food1 = new Food("Ribs", 30);

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

  it("should be able to eat food and raise health", function(){
    hero.eat(food1)
    assert.deepEqual(hero.health, 130 )
  })












})
