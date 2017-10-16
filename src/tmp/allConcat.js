import { Animal } from './../js/animal.js';

$(document).ready(function() {
  let animalName,
      newAnimal,
      foodLevel;


  $('.name').on('click', function(){
    animalName = $('.animal').val();
    newAnimal = new Animal(animalName, 10);
    foodLevel = newAnimal.setHunger();
    console.log('foodLevel:', foodLevel);
    console.log(newAnimal);
    $('.animal-name').text(animalName);
  });

  $('.health').click(function() {
    console.log('foodLevel:', foodLevel);
    $('.health-result').text(foodLevel);
  });

});
