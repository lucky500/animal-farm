$(document).ready(function(){


  // $('#pokemon-form').submit(function(e){
  //   e.preventDefault();
  //   pokemonResult = $('.pokemon-id').val();
  //   console.log(pokemonResult);
  //   pokeSubmit();
  // });


    // function pokeSubmit(){
    //   var param = document.getElementById("pokeInput").value;
    //   var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
    //
    //   $.getJSON(pokeURL, function(data){
    //     console.log(data);
    //     console.log(JSON.stringify(data, null, "  "));
    //     console.log(param);
    //   });
    // }

    $("#my-button").click(function(){

      var myInput = $("#my-input").val();
      console.log(myInput);
      var myUrl = "https://pokeapi.co/api/v2/pokemon/" + myInput + "/";
      console.log(myUrl);

      $.ajax({
        method: "GET",
        url: myUrl,
        success: function(data){
          $("#poke-name").html(data.id);

          $("#poke-img").attr("src", data.sprites.front_default);

        }
      });


    });
});
