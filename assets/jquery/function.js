$(document).ready(function(){
    
    var dateTime = moment().format("MM-DD-YYYY");
    $("#currentDay").append(dateTime);
    
    // $(".saveButton").click(function(){
    //     $("input").value();
    // })
    
    // console.log("date is" + dateTime);
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

