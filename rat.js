const Rat = function(name){
  this.name = name;
}

Rat.prototype.touchFood = function (food) {
  return food.replenishmentValue = -(food.replenishmentValue);
};

module.exports = Rat;
