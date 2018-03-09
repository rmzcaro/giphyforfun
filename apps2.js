//Jquery selector lets me grab from HTML
//Checks that HTML document loads and then it execute anon function passed to it
//these are called callback functions (these are exec after a action happens)
$(document).ready(function(){
  //initialize an array var 
  var gifArray = ["cows", "chickens", "dogs"];
  displayButtonArray(gifArray);
  //listen to click on buttons with class gifButton
  $(".gifButton").on("click",function(){
      //this refers to current context in which event happened 
      var selectedButton = $(this).attr("data-id");
      console.log(selectedButton);
      //pass selected button value to make the AJAX call 
      makeAjaxCall(selectedButton); 
  });
  
});

function displayButtonArray(gifArray){
  for(var i=0; i < gifArray.length;i++){
      var myButton = $("<button class='gifButton'>");
      //become familiar with data attr 
      myButton.attr("data-id",gifArray[i]);
      myButton.text(gifArray[i]);
      //There are 3 types of jQuery selector with id, class, or elements
      $("#button-holder").append(myButton);
  }
}
// function makeAjaxCall(selectedButtonValue){
  //AJAX code here 
  $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
      console.log(response);
  }
}


var queryURL = "https://api.giphy.com/v1/gifs/search?q=golden+retreiver&api_key=03BFaIu291Xxikn1zURAMosrPWoDshPT&limit=10";

$.ajax({
url: queryURL,
method: "GET"  
}).then(function(reponse){
  //console.log response 
  console.log(queryURL);
  console.log(response);
})
