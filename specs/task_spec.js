var assert = require("assert");
var Task = require("../task.js");

describe("Task Tests", function(){

  let task;

  beforeEach("Setup", function(){
    task = new Task("Something", "easy", 3, 100, false);
  })

  it("should have a description", function(){
    assert.strictEqual(task.description, "Something");
  })

})
