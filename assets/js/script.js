$(document).ready(function () {
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
    // user input saved in localStorage set to the values of the individual textarea elements.
    $("#hour-9 .description").text(localStorage.getItem("hour-9"));
    $("#hour-10 .description").text(localStorage.getItem("hour-10"));
    $("#hour-11 .description").text(localStorage.getItem("hour-11"));
    $("#hour-12 .description").text(localStorage.getItem("hour-12"));
    $("#hour-13 .description").text(localStorage.getItem("hour-13"));
    $("#hour-14 .description").text(localStorage.getItem("hour-14"));
    $("#hour-15 .description").text(localStorage.getItem("hour-15"));
    $("#hour-16 .description").text(localStorage.getItem("hour-16"));
    $("#hour-17 .description").text(localStorage.getItem("hour-17"));

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

    //displays the current date and time
    setInterval(function () {
      var today = dayjs();
      $("#currentDay").text(today.format("MMM D, YYYY, h:mm:ss"));
    }, 1000)
  });
});