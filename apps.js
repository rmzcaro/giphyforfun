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

//get 5 images from API
var api = "https://api.giphy.com/v1/gifs/search";
var apiKey = "&api_key=Semo8rtzISD2onGdZY0FO4MlSkdvTGz7";
var qty = "&limit=5";

//button listener
$("button").on("click", function() {
    findValue =$(this).val();
    console.log(findValue);
    queryURL = api+"?q="+findValue+apiKey+qty   

    //AJAX Call
$.ajax({
    url: queryURL,
    method: "GET"
 })
 
 .then(function(response){
     console.log(response);

   

// console.log(findings);

// var findings=response.data.image_original_url;
// var danceImage =$("<img>");

// loop through array 
for (var i=0;i<findings.length; i++){
    var imageContent =$("<div class='col-md-4'>");
    var rating = findings[i].rating;
    var movingImage = findings[i].images;
    var seeImage =$("<img>");
// 
 });

});



// when a user clicks on image it moves, then it stops if clicked on again
// then it allows for user to create a button 
// when the button is clicked it populates images 
// once images are populated, the images will move upon first click and be still upon second click 