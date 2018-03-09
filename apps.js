$(document).ready(function() {
    // alert("Hi!");
});

// Obtain a giphy API

    // Semo8rtzISD2onGdZY0FO4MlSkdvTGz7

// create and array of strings, * Try using a loop that appends a button for each string in the array.

$("submit").click(function(){
    $("#button-holder").append("<button>");
});

// get images 

var queryURL = "https://api.giphy.com/v1/gifs/search?q=salsa&api_key=Semo8rtzISD2onGdZY0FO4MlSkdvTGz7";

var api = "https://api.giphy.com/v1/gifs/search";
var apiKey = "Semo8rtzISD2onGdZY0FO4MlSkdvTGz7";
var qty = "KEY&limit=5";
// when a user clicks on image it moves, then it stops if clicked on again
// then it allows for user to create a button 
// when the button is clicked it populates images 
// once images are populated, the images will move upon first click and be still upon second click 