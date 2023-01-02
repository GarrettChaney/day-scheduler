let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  let savedNotes = localStorage.getItem("savedNotes")
  // Initial population of the day/date so we avoid any blank spaces until timer fires up.
  $("#currentDay").text(days[dayjs().day()] + ", " + dayjs().format('MMMM D, YYYY h:mm:ss A'));
  
  // Hold code until entire app has finished loading.
$(document).ready(function () {
// Maintain current time
    setInterval(function() {
      $("#currentDay").text(days[dayjs().day()] + ", " + dayjs().format('MMMM D, YYYY h:mm:ss A'));
      timeTracker()
    }, 1000); 
  
    // Manage time tracking.
    function timeTracker() {
      let hourNow = dayjs().hour();
      $(".time-block").each(function() {
        timeBlock = $(this).attr("id");
        if (hourNow < timeBlock) {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
        else if (hourNow >  timeBlock) {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");
        }
        else {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        }
      })
    }
  
    // Save button handling
    $(".saveBtn").on("click", function() {
      let hourNote = $(this).siblings(".description").val();
      let hour = $(this).parent().attr("id");
      localStorage.setItem(hour, hourNote)
    })
  
    // Pull saved information for each hour.
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    
    timeTracker()
})