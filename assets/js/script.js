// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    //listener for click events on the save button
    $(".saveBtn").click(function(){
      //shows the button info in the console
      console.log(this);
      //consoles the input text from the text areas with the class of description
      var inputText = $(this).siblings(".description").val();
      console.log(inputText);
      //consoles the id from the original div element containing the hour-x
      var timeSelector = $(this).parent().attr("id");
      console.log(timeSelector);

      //places items in local storage
      localStorage.setItem(timeSelector, inputText);
    })
      //loads saved data from localStorage in each separate time block
      $("hour-9 .description").val(localStorage.getItem("hour9"));
      $("hour-10 .description").val(localStorage.getItem("hour10"));
      $("hour-11 .description").val(localStorage.getItem("hour11"));
      $("hour-12 .description").val(localStorage.getItem("hour12"));
      $("hour-13 .description").val(localStorage.getItem("hour13"));
      $("hour-14 .description").val(localStorage.getItem("hour14"));
      $("hour-15 .description").val(localStorage.getItem("hour15"));
      $("hour-16 .description").val(localStorage.getItem("hour16"));
      $("hour-17 .description").val(localStorage.getItem("hour17"));

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
        var time = dayjs().hour();
        console.log(time)
      
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    //displays the current date and time
      setInterval(function(){
    var today = dayjs();
    $("#currentDay").text(today.format("MMM D, YYYY, h:mm:ss"));
      },1000)
  });
   