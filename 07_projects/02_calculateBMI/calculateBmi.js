const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `plz give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plz give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span> ${bmi}<span>`;

    if (height < 18.6) {
      results.innerHTML = ` ${bmi} <br>  "Under Weight" ` ;
    }
    if (height < 18.5 && height > 24.9) {
      results.innerHTML = ` ${bmi} <br> "Normal Range "`;
    } else {
      results.innerHTML = ` ${bmi} <br> "Overweight "`;
    }
  }
});
