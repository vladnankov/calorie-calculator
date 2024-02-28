// script.js
document.getElementById('calculate').addEventListener('click', function() {
    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.getElementById('gender').value;
    const weight = parseInt(document.getElementById('weight').value, 10);
    const height = parseInt(document.getElementById('height').value, 10);
    const activityLevel = parseFloat(document.getElementById('activity').value);

    const bmr = gender === 'male' ?
        (10 * weight) + (6.25 * height) - (5 * age) + 5 :
        (10 * weight) + (6.25 * height) - (5 * age) - 161;

    const maintenanceCalories = Math.round((bmr * activityLevel) / 10) * 10;
    const bulkingCalories = Math.round((maintenanceCalories * 1.10) / 10) * 10; // Rounded to nearest ten
    const cuttingCalories = Math.round((maintenanceCalories * 0.80) / 10) * 10; // Rounded to nearest ten

    const results = `
        <p>Maintain Weight: ${maintenanceCalories}</p>
        <p>Gain Weight: ${bulkingCalories}</p>
        <p>Lose Weight: ${cuttingCalories}</p>
    `;

    document.getElementById('result').innerHTML = results;
});
