let input = [];


// Function that takes input
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      input = eval(input);
      document.querySelector("input").value = input;
    } else if (e.target.innerHTML == "AC") {
      input = "";
      document.querySelector("input").value = input;
    } else if (e.target.innerHTML == "C") {
      input = input.substring(0, input.length - 1);
      document.querySelector("input").value = input;
    } else {
      document.querySelector("input").value = "";
      console.log(e.target);
      input = input + e.target.innerHTML;
      document.querySelector("input").value = input;
    }
  });
});
