const Dinosaur = function(type, eggs){
  this.type = type;
  this.offspring = eggs;
}

Dinosaur.prototype.reproduce = function(year){
  dinos = 1;
  for (var i = 0; i < year; i++) {
    dinos += (dinos * this.offspring);
  }
  return dinos;
}

module.exports = Dinosaur;
