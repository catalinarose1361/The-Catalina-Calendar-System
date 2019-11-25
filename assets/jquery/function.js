$(document).ready(function(){
    // current date and time variables updated using moment.js
    var date = moment().format("MM-DD-YYYY");
    var time = moment().format('LT');

    // displays date and time on the application by appending to p tags in header
    $("#currentDay").append(date);
    $("#currentTime").append(time);
    console.log(time);
  
    $(".saveButton").on("click", function(e) {
        e.preventDefault();
        var myText = $("#myText").val();
        console.log("text val" + myText);

        localStorage.setItem("input", myText);
    });
    var savedInfo = localStorage.getItem("input");
    $("#myText").append(savedInfo);

    
});
// if the time slot has passed them the time slot will be gray
// if the time slot is current the time slot will be red
// if the time slot is in the future it will be green

