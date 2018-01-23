const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('dinosaur', function(){

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var tyrannosaurus;
  var dilophosaurus;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("T-Rex", 3);
    dinosaur2 = new Dinosaur("Triceratops", 4);
    dinosaur3 = new Dinosaur("Argentinosaurus", 1);
    tyrannosaurus = new Dinosaur("T-Rex", 3);
    dilophosaurus = new Dinosaur("Dilophosaurus", 2);
  })

  it('should have a type', function(){
    assert.strictEqual(dinosaur1.type, "T-Rex");
  })

  it('should have a number of offspring', function(){
    assert.strictEqual(dinosaur2.offspring, 4);
  })

  it('should be able to reproduce in 1 year', function(){
    assert.strictEqual(dinosaur1.reproduce(1), 4);
  })

  it('should be able to reproduce in 2 years', function(){
    assert.strictEqual(dinosaur2.reproduce(2), 25);
  })

  it('should be able to reproduce in 3 years', function(){
    assert.strictEqual(dinosaur3.reproduce(3), 8);
  })

  it('should be able to reproduce in 3 years', function(){
    assert.strictEqual(dinosaur2.reproduce(3), 125);
  })

  it('tyranasaurus should be able to reproduce in 2 years', function(){
    assert.strictEqual(tyrannosaurus.reproduce(2), 16);
  })

  it('dilophosaurus should be able to reproduce in 2 years', function(){
    assert.strictEqual(dilophosaurus.reproduce(2), 9);
  })



})
