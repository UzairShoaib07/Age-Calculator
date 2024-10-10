document.getElementById('ageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validate user input
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }

    // Get the current date
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // JavaScript months are 0-based.
    const currentYear = today.getFullYear();

    // Calculate age
    let age = currentYear - year;

    // Adjust if the birthday hasn't happened yet this year
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    // Display the result
    if (age >= 0) {
        document.getElementById('result').textContent = `You are ${age} years old.`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid date of birth.";
    }
});
