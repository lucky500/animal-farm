import { Animal } from './../js/animal.js';

$(document).ready(function() {
  let animalName = $('.animal').val();
   let newAnimal = new Animal(animalName, 30);

   $('.test').html(newAnimal.healthAlert);

  $('.name').on('click', function(){

    $('.animal-name').text(animalName);
    var foodLevelOut = newAnimal.setHunger();
    $('.health-result').html(newAnimal.healthLevel);

  });

  $('.health').click(function() {
    $('.health-result').text(newAnimal.healthLevel);
    console.log(newAnimal.healthLevel);
  });

  $('.feed-btn').click(function() {
    let test1 = newAnimal.feed()
    console.log('health:', newAnimal.healthLevel);
  });

  $('.sleep-btn').click(function() {
    newAnimal.sleep();
    console.log(newAnimal.healthLevel);
  });

  $('.wake-up-btn').click(function(){
    newAnimal.waken();
    console.log(newAnimal.healthLevel);
  });

});
