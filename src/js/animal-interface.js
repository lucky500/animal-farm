import { Animal } from './../js/animal.js';

$(document).ready(function() {
   let newAnimal;

  $('.name').on('click', function(){
    let animalName = $('.animal').val();
    newAnimal = new Animal(animalName, 30);

    var foodLevelOut = newAnimal.setHunger();
    console.log('initial', newAnimal);
    //debugger;
    //let initialFoodLevel = 10;
    foodLevelOut = newAnimal.setHunger();
     console.log('food', foodLevelOut);
     console.log('food:', newAnimal.foodLevel);

    console.log('foodLevel: 2', foodLevelOut);
  });

  $('.health').click(function() {
    console.log('food:', newAnimal.foodLevel);
  });

  $('.feed-btn').click(function() {
    let test1 = newAnimal.feed()
    console.log('test1:', test1);
    console.log('food:', newAnimal.foodLevel);
  });

});
