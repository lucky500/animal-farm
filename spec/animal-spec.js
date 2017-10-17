import { Animal } from './../src/js/animal.js';
//var lionKing = require('./../src/js/animal.js').animalModule;

describe("Animal", function(){
  let lion = new Animal("Lion King");

  beforeEach(function() {
    jasmine.clock().install();
    lion.foodLevel = 10;
    lion.setHunger();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is create', function(){
    expect(lion.name).toEqual("Lion King");
    expect(lion.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(lion.foodLevel).toEqual(7);
  });

  it('should add 10 points to food level when clicked', function(){
    jasmine.clock().tick(9001);
    lion.feed();
    expect(lion.foodLevel).toEqual(10);
  });

});
