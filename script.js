// ---------- Interest Calculator ----------
function runInterestCalculator() {

  const principal = document.getElementById('principal');
  if (!principal) return;

  const rate = document.getElementById('rate');
  const time = document.getElementById('time');
  const btn = document.getElementById('interestBtn');
  const msg = document.getElementById('interestMsg');
  const interestOut = document.getElementById('interestOut');
  const totalOut = document.getElementById('totalOut');
  const result = document.querySelector('.result');

  result.style.display = "none";

  btn.addEventListener('click', function () {

    const p = Number(principal.value);
    const r = Number(rate.value);
    const t = Number(time.value);

    if (p <= 0 || r < 0 || t <= 0) {
      msg.textContent = "Enter valid values.";
      result.style.display = "none";
      return;
    }

    msg.textContent = "";

    const interest = (p * r * t) / 100;
    const total = p + interest;

    interestOut.textContent = interest.toFixed(2);
    totalOut.textContent = total.toFixed(2);

    result.style.display = "flex";
  });
}


// ---------- BMI Calculator ----------
function runBmiCalculator() {

  const height = document.getElementById('height');
  if (!height) return;

  const weight = document.getElementById('weight');
  const btn = document.getElementById('bmiBtn');
  const msg = document.getElementById('bmiMsg');
  const bmiOut = document.getElementById('bmiOut');
  const categoryOut = document.getElementById('categoryOut');
  const result = document.querySelector('.result');

  result.style.display = "none";

  btn.addEventListener('click', function () {

    const h = Number(height.value);
    const w = Number(weight.value);

    if (h <= 0 || w <= 0) {
      msg.textContent = "Enter valid height and weight.";
      result.style.display = "none";
      return;
    }

    msg.textContent = "";

    const bmi = w / ((h / 100) * (h / 100));

    bmiOut.textContent = bmi.toFixed(2);

    if (bmi < 18.5) {
      categoryOut.textContent = "Underweight";
    } else if (bmi < 25) {
      categoryOut.textContent = "Normal";
    } else if (bmi < 30) {
      categoryOut.textContent = "Overweight";
    } else {
      categoryOut.textContent = "Obese";
    }

    result.style.display = "flex";
  });
}


// ---------- Calorie Calculator ----------
function runCalorieCalculator() {

  const age = document.getElementById('age');
  if (!age) return;

  const gender = document.getElementById('gender');
  const weight = document.getElementById('cweight');
  const height = document.getElementById('cheight');
  const activity = document.getElementById('activity');
  const btn = document.getElementById('calorieBtn');
  const msg = document.getElementById('calorieMsg');
  const out = document.getElementById('calorieOut');
  const result = document.querySelector('.result');

  result.style.display = "none";

  btn.addEventListener('click', function () {

    const a = Number(age.value);
    const w = Number(weight.value);
    const h = Number(height.value);
    const act = Number(activity.value);

    if (a <= 0 || w <= 0 || h <= 0) {
      msg.textContent = "Enter valid age, weight and height.";
      result.style.display = "none";
      return;
    }

    msg.textContent = "";

    let bmr;

    if (gender.value === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const calories = Math.round(bmr * act);
    out.textContent = calories;

    result.style.display = "flex";
  });
}


runInterestCalculator();
runBmiCalculator();
runCalorieCalculator();
