$(document).ready(function() {

    // current date and time variables updated using moment.js
    var date = moment().format("MM-DD-YYYY");
    var time = moment().format('LT');
    // // displays date and time on the application by appending to p tags in header
    $("#currentDay").append(date);
    $("#currentTime").append(time);
    // function to change the colors of the tivs based on time 
    $(".time-block").each(function(index, element) {
    
            
        var hour24 = moment().format('HH') // 0-24 format
        console.log(hour24);
        

        if (hour24 === $(this).attr("id")) {

            // $(this).removeClass ("future");
            $(this).addClass("present");
        } else if (hour24 > $(this).attr("id")) {
            // $(this).removeClass ("present");
            $(this).addClass("past");
            
        } else if (hour24 < $(this).attr("id")) {
            $(this).addClass("future");
            

        }
        console.log($("#9"))
    });
    

   
});

