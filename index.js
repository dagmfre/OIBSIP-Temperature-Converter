const convertButton = document.querySelector("button");
const userInput = document.querySelector(".input-number");
const resultOutput = document.querySelector(".result-p");

convertButton.addEventListener("click", function () {
  const selectedOption = document.querySelector("select").value;
  const inputValue = parseFloat(userInput.value);

  if (selectedOption === "1") {
    // Fahrenheit to Celsius
    const celsiusValue = (inputValue - 32) / 1.8;
    resultOutput.textContent = celsiusValue.toFixed(2) + "C";
    console.log(resultOutput);
  } else if (selectedOption === "2") {
    // Celsius to Fahrenheit
    const fahrenheitValue = inputValue * 1.8 + 32;
    resultOutput.textContent = fahrenheitValue.toFixed(2) + "F";
  }
});
