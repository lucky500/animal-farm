import { Animal } from './../src/js/animal.js';
//var lionKing = require('./../src/js/animal.js').animalModule;

describe("Animal", function(){
  let lion = new Animal("Lion King");

  beforeEach(function() {
    jasmine.clock().install();
    lion.healthLevel = 10;
    lion.setHunger();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name and a health level of 10 when it is create', function(){
    expect(lion.name).toEqual("Lion King");
    expect(lion.healthLevel).toEqual(10);
  });

  it('should have a health level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(lion.healthLevel).toEqual(9);
  });

  it('should add 10 points to health level when clicked', function(){
    jasmine.clock().tick(9001);
    lion.feed();
    expect(lion.healthLevel).toEqual(17);
  });

  it('should add 5 points to health level when sleeping', function() {
    jasmine.clock().tick(6001);
    lion.sleep();
    expect(lion.healthLevel).toEqual(13);
  });

  it('should add 5 points and health level stays the same in sleep mode', function() {
    jasmine.clock().tick(6001);
    lion.sleep();
    jasmine.clock().tick(9001);
    expect(lion.healthLevel).toEqual(13);
  });

  it('should substract 5 points when waking up', function() {
    jasmine.clock().tick(6001);
    lion.sleep();
    lion.setHunger();
    expect(lion.healthLevel).toEqual(10);
  });
});
