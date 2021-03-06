const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.completedTasks = [];
}



Hero.prototype.talk = function(){
  return `My name is ${this.name}`;
}

Hero.prototype.getTasks = function(){
  return this.tasks;
};

Hero.prototype.eat = function (food) {
  if(food.name === this.favouriteFood){
    food.replenishmentValue *= 1.5;
  }
  return this.health += food.replenishmentValue;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.numberOfTasks = function () {
  return this.tasks.length;
};

Hero.prototype.orderByDifficulty = function () {
  return this.tasks.sort(function(a, b) {
  return a.difficultyLevel - b.difficultyLevel;
});
};

Hero.prototype.orderByUrgency = function () {
  return this.tasks.sort(function(a, b) {
  return a.urgencyLevel - b.urgencyLevel;
});
};

Hero.prototype.orderByReward = function () {
  return this.tasks.sort(function(a, b) {
  return a.reward - b.reward;
});
};

Hero.prototype.Completed = function (task) {
   return setCompleted();
};







module.exports = Hero;
