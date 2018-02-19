var assert = require("assert");
var Task = require("../task.js");

describe("Task Tests", function(){

  let task;

  beforeEach("Setup", function(){
    task = new Task("Something", 4, 3, 100, false);
  })

  it("should have a description", function(){
    assert.strictEqual(task.description, "Something");
  })

  it("should have a difficulty level", function(){
    assert.strictEqual(task.difficultyLevel, 4);
  })

  it("should have an urgency level", function(){
    assert.strictEqual(task.urgencyLevel, 3);
  })

  it("should have a reward", function(){
    assert.strictEqual(task.reward, 100);
  })

  it("should be able to be completed", function(){
    assert.strictEqual(task.completed, false);
  })

})
