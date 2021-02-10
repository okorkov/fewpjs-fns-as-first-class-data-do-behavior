/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let hours = time.slice(0,2)
  hours = parseInt(hours)
  if(hours <= 11){
    return "Good Morning";
  }
  if(hours >= 12 && hours <= 16){
    return "Good Afternoon";
  }
  if(hours > 16){
    return "Good Evening";
  }
}

function displayMessage(message) {
  let element = document.getElementById("greeting");
  element.innerHTML = message;
}
