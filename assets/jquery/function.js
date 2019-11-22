// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

// The current day is displayed at the top of the calendar.

// Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

// GIVEN that an employee adds events to a specific hour in a calendar

// WHEN the employee clicks the save button

// THEN events are saved in the timeblock for that hour


// Step 1. display current day at the top of the calendar
    // 
// Step 2. color time blocks to indicate past present and future
// Step 3. Add text to chosen block and save in local storage 
// Step 4. display input in block even after refresh  

$(document).ready(function(){
    
    var dateTime = moment().format("MM-DD-YYYY");
    $("#currentDay").append(dateTime);
    
    
});






