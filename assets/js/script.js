// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //listener for click events on the save button
  $(".saveBtn").click(function () {
    //shows the button info in the console
    console.log(this);
    //consoles the input text from the text areas with the class of description
    var inputText = $(this).siblings(".description").val();
    console.log(inputText);

    //consoles the id from the original div element containing the hour-x
    var timeSelector = $(this).parent().attr("id");
    console.log(timeSelector);

    // places items in local storage
    localStorage.setItem(timeSelector, inputText);
  })
  
  function timeClock() {
    var currentTime = dayjs().hour();
    //for each time block, the id of each div is separated by the "hour-" and the number to
    //allow the comparison to the actual time
    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("hour-")[1]);
      console.log(currentTime, hour);
      if (hour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (hour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })

  }
  timeClock();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //displays the current date and time
  setInterval(function () {
    var today = dayjs();
    $("#currentDay").text(today.format("MMM D, YYYY, h:mm:ss"));
  }, 1000)
});
