// BMI Calculator

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = parseInt(document.querySelector('#result').value)

  if (height == '' || height < 0 || isNan(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (height == '' || height < 0 || isNan(height)) {
    result.innerHTML = `Please give a valid weight ${height}`;
  } else {
    const result = weight / ((height * height) / 1000).toFixed(2);
  }
});