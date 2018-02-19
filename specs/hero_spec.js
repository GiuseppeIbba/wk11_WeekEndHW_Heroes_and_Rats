var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");
var Task = require("../task.js");
var Rat = require("../rat.js");

describe("Hero Tests", function(){

  let hero;
  let food1;
  let food2;
  let task1;
  let task2;
  let task3;
  let task4;
  let task5;
  let task6;
  let task7;
  let rat;

  beforeEach("Setup", function(){
    hero = new Hero("Sarazor", 100, "Chicken");
    food1 = new Food("Ribs", 15);
    food2 = new Food("Chicken", 30);
    task1 = new Task("Something", 4, 3, 10, false);
    task2 = new Task("Collect 5 rubies", 2, 2, 30, false);
    task3 = new Task("Explore the black pools", 3, 1, 20, false);
    task4 = new Task("Craft a shield", 2, 5, 5, false);
    task5 = new Task("Save the cat", 1, 5, 40, false);
    task6 = new Task("Read the Javascript manual", 1, 4, 80, false);
    task7 = new Task("Say Leroy Jeeeeenkins", 5, 1, 100, false);
    rat = new Rat("Mike");
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
    assert.deepEqual(hero.health, 115 )
  })

  it("should be able to eat favourite food and raise health by 1.5 food value", function(){
    hero.eat(food2)
    assert.deepEqual(hero.health, 145 )
  })

  it("should be able to add a task", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.numberOfTasks(), 3);
  })

  it("should be able to sort tasks by difficulty", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.orderByDifficulty(), [task2, task3, task1]);
  })

  it("should be able to sort tasks by urgency", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.orderByUrgency(), [task3, task2, task1]);
  })

  it("should be able to sort tasks by reward", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.orderByReward(), [task1, task3, task2]);
  })

  it("should be poisoned by the food touched by a rat", function(){
    rat.touchFood(food1);
    hero.eat(food1);
    assert.strictEqual(hero.health, 85);
  })









})
