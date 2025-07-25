let display = document.getElementById("display");
let buttons = document.querySelectorAll("input[type='button']");

buttons.forEach(button => {
  button.onclick = () => {
    let value = button.value;

    if (value === "AC") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (value === "%") {
      try {
        display.value = eval(display.value) / 100;
      } catch {
        display.value = "Error";
      }
    } else if(value=== "C"){
        display.value = display.value.slice(0, -1);
    }
    else {
      display.value += value;
    }
  };
});
