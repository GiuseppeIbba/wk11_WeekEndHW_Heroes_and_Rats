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

Hero.prototype.eat = function (food) {
  if(food.name === this.favouriteFood){
    food.replenishmentValue *= 1.5;
  }
  return this.health += food.replenishmentValue;
};



module.exports = Hero;
