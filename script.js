'use strict';

document.getElementById('solution-circumference').addEventListener('click', circleCalculator)

document.getElementById('solution-area').addEventListener('click', circleCalculator)

function circleCalculator () {
  // variable assigned with a diameter value
  const radius = document.getElementById('diameter').value / 2;
  // variable assigned with circumference of a circle formula
  const circumference = 2 * Math.PI * radius;
  // variable assigned with area of a circle formula
  const area = Math.PI * Math.pow(radius, 2);
  // final result for circumference rounded to nearest tenth
  document.getElementById('solution-circumference').innerHTML = 'The circumference of your circle is = ' + circumference.toFixed(1) + ' units '
  // final result for area rounded to nearest tenth
  document.getElementById('solution-area').innerHTML = 'The area of your circle is = ' + area.toFixed(1) + ' units2 '
  // conditions to prevent user from inputting zeros and negative integers in text box
  if (radius === 0) {
    alert("Error: Your dimension can't be a '0'")
  } else if (radius <= 0) {
    alert("Error: Your dimension can't be a negative integer")
  }
}
