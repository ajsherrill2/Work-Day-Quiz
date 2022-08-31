// Displays current date and time in header
var currentDate = moment().format("MMMM Do YYYY hA");
$("#currentDay").text(currentDate);

// Changes display of textarea in each time-block depending on the time of day!
function colorBlock() {
  var currentTime = moment().hours(); // Military time

  let timeBlocks = $(".time-block");

  for (let i = 0; i < timeBlocks.length; i++) {
    let timeBlockId = timeBlocks[i].getAttribute("id");
    let militaryTime = parseInt(timeBlockId.replace("hour", "")) + 8; // Converts time in time-block to military time
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

// Save button function, saves content in textarea to local storage
$(".saveBtn").on("click", function () {
  let key = $(this).parent().attr("id");
  let value = $(this).siblings(".description").val();

  localStorage.setItem(key, value);
});

let textareaEls = $(".time-block");

// Calls previously saved messages to textareas
for (let i = 0; i < textareaEls.length; i++) {
  const element = textareaEls[i].children[1];
  const key = textareaEls[i].getAttribute("id");
  let value = localStorage.getItem(key);

  if (value) {
    element.append(value);
  }
}
