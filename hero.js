const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}



Hero.prototype.talk = function(){
  return `My name is ${this.name}`;
}

Hero.prototype.getTasks = function(){
  return this.tasks;
};



module.exports = Hero;
