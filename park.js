const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur =function (newDinosaur){
  this.enclosure.push(newDinosaur);
}

Park.prototype.removeType = function(type){
  let newArray = [];
  for(dinosaur of this.enclosure){
    if (dinosaur.type != type){
      newArray.push(dinosaur)
    }
  }
  this.enclosure = newArray;
}

Park.prototype.getFertile = function(num){
  let fertileArray = [];
  for (dinosaur of this.enclosure){
    if (dinosaur.offspring > num){
      fertileArray.push(dinosaur);
    }
  }
  return fertileArray;
}

module.exports = Park;
