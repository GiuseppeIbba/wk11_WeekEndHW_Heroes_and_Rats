const Task = function(description, difficultyLevel, urgencyLevel, reward, completed){
  this.description = description;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = false;
}

module.exports = Task;
