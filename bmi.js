function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  if (weight && height) {
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + bmi;

    if (bmi < 18.5) {
      resultElement.innerHTML += "<br>Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultElement.innerHTML += "<br>Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      resultElement.innerHTML += "<br>Overweight";
    } else {
      resultElement.innerHTML += "<br>Obese";
    }
  } else {
    alert("Please enter both weight and height to calculate BMI.");
  }
}
