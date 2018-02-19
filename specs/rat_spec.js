var assert = require("assert");
var Rat = require("../rat.js");

describe("Rat Tests", function(){

  let rat;

  beforeEach("Setup", function(){
    rat = new Rat("Pantegano");
  })

  it("should have a name", function(){
    assert.strictEqual(rat.name, "Pantegano");
  })
})
