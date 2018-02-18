var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero Tests", function(){

  let hero;

  // beforeEach("Setup", function(){
  //   hero = new Hero("Sarazor");
  // })

  it("should have a name", function(){
    hero = new Hero("Sarazor");
    assert.strictEqual(hero.name, "Sarazor");
})

})
