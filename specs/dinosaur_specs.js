const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('dinosaur', function(){

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("T-Rex", 3);
    dinosaur2 = new Dinosaur("Triceratops", 4);
    dinosaur3 = new Dinosaur("Argentinosaurus", 1);
  })

  it('should have a name', function(){
    assert.strictEqual(dinosaur1.name, "T-Rex");
  })

  it('should have a number of offspring', function(){
    assert.strictEqual(dinosaur2.offspring, 4);
  })

})
