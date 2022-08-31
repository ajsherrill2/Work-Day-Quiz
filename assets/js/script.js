// Displays current date and time in header
var currentDate = moment().format("MMMM Do YYYY hA");
$("#currentDay").text(currentDate);

function colorBlock() {
  var currentTime = moment().hours(); // Military time

  let timeBlocks = $(".time-block");

  for (let i = 0; i < timeBlocks.length; i++) {
    let timeBlockId = timeBlocks[i].getAttribute("id");
    let militaryTime = parseInt(timeBlockId.replace("hour", "")) + 8;
    let textareaEl = timeBlocks[i].children[1];

    if (militaryTime < currentTime) {
      textareaEl.classList.add("past");
    }
    if (militaryTime === currentTime) {
      textareaEl.classList.add("present");
    }
    if (militaryTime > currentTime) {
      textareaEl.classList.add("future");
    }
  }
}

colorBlock();

$('.saveBtn').on('click', function () {
    let key = $(this).parent().attr('id');
    let value = $(this).siblings('.description').val();

    localStorage.setItem(key, value);
});
