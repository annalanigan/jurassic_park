const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('park', function(){

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var tyrannosaurus;
  var dilophosaurus;

  beforeEach(function(){
  park = new Park();
  dinosaur1 = new Dinosaur("T-Rex", 3);
  dinosaur2 = new Dinosaur("Triceratops", 4);
  dinosaur3 = new Dinosaur("Brachiosaurus", 1);
  dinosaur4 = new Dinosaur("T-Rex", 3);
  tyrannosaurus = new Dinosaur("T-Rex", 3);
  dilophosaurus = new Dinosaur("Dilophosaurus", 2);
  })

  it('should start with empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('should be able to add a dinosaur', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(park.enclosure.length, 2);
  })

  it('should be able to remove all dinosaurs of a type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeType("T-Rex");
    assert.strictEqual(park.enclosure.length, 2)
  })

  it('should bet a harder test to pass to check that works', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeType("T-Rex");
    assert.strictEqual(park.enclosure.length, 8);
  })

  it('should return all dinos with offspring count of more than 2', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.getFertile(2);
    assert.strictEqual(park.enclosure.length, 6);
  })

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 16);
  });

  it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 25);
  });

  it('should be able to calculate number of dinosaur after year one starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 7);
  });

})
