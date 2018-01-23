const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur =function(newDinosaur){
  this.enclosure.push(newDinosaur);
}

module.exports = Park;
