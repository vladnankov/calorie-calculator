// script.js
document.getElementById('calculate').addEventListener('click', function() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activityLevel = document.getElementById('activity').value;

    const bmr = gender === 'male' ?
        (10 * weight) + (6.25 * height) - (5 * age) + 5 :
        (10 * weight) + (6.25 * height) - (5 * age) - 161;

    const calories = bmr * activityLevel;
    document.getElementById('result').innerText = `Total Daily Calorie Needs: ${calories.toFixed(2)}`;
});
