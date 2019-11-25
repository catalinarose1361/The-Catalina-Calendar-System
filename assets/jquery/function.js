$(document).ready(function(){

  

    // sets a default background color for time slots
    $(".time-block").css("background-color", "#77dd77");

    // current date and time variables updated using moment.js
    var date = moment().format("MM-DD-YYYY");
    var time = moment().format('LT');
    
    

    // displays date and time on the application by appending to p tags in header
    $("#currentDay").append(date);
    $("#currentTime").append(time);
    // format the time as a number
    

    
    $(".saveButton").on("click", function(e) {
        e.preventDefault();
        //grabbing the value of what the user types in the text box
        input = $(this).attr("id");
        
        var myText = $(".myText").val();
        //saving the value in local storage
        localStorage.setItem(input, myText);

        
    });

    var nineInfo = localStorage.getItem("9");
    //displaying that value on the document
    $("#9text").append(nineInfo);
    //retreiving the text box value from local storage
    var tenInfo = localStorage.getItem("10");
    //displaying that value on the document
    $("#10text").append(tenInfo);
    //retreiving the text box value from local storage
    var elevenInfo = localStorage.getItem("11");
    //displaying that value on the document
    $("#11text").append(elevenInfo);
    //retreiving the text box value from local storage
    var noonInfo = localStorage.getItem("12");
    //displaying that value on the document
    $("#12text").append(noonInfo);
    //retreiving the text box value from local storage
    var oneInfo = localStorage.getItem("1");
    //displaying that value on the document
    $("#1text").append(oneInfo);
    //retreiving the text box value from local storage
    var twoInfo = localStorage.getItem("2");
    //displaying that value on the document
    $("#2text").append(twoInfo);
    //retreiving the text box value from local storage
    var threeInfo = localStorage.getItem("3");
    //displaying that value on the document
    $("#3text").append(threeInfo);
    //retreiving the text box value from local storage
    var fourInfo = localStorage.getItem("4");
    //displaying that value on the document
    $("#4text").append(fourInfo);
    //retreiving the text box value from local storage
    var fiveInfo = localStorage.getItem("5");
    //displaying that value on the document
    $("#5text").append(fiveInfo);
    //retreiving the text box value from local storage
    
})

