const screen = document.getElementById("inputBox");



//display screen
let displayToScreen = (digit) => {
  if (screen.textContent === "0") {
    screen.textContent = digit;
  } else {
    screen.textContent += digit;
  }
};



//Clear All
let clearAllScreen = () => {
  screen.textContent = 0;
};



//Clear Only One Value
let clearScreen = () => {
    if (screen.textContent !== "0") {
      screen.textContent = screen.textContent.slice(0, -1);
    } else {
      screen.textContent = "0";
    }
  };
    


  
//Total  
  let total = () => {
    inputBox.textContent = eval(inputBox.textContent);
  };


