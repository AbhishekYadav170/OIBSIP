// =========================
// GET ELEMENTS
// =========================

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


// =========================
// CONVERT TEMPERATURE
// =========================

function convertTemperature() {

    const value = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Clear previous error
    errorMessage.textContent = "";

    // Check empty or non-numeric input
    if (temperatureInput.value.trim() === "" || isNaN(value)) {

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        resetResults();
        return;
    }


    // =========================
    // CONVERT TO CELSIUS
    // =========================

    let celsius;

    if (unit === "celsius") {
        celsius = value;
    }

    else if (unit === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    }

    else if (unit === "kelvin") {
        celsius = value - 273.15;
    }


    // =========================
    // ABSOLUTE ZERO VALIDATION
    // =========================

    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        resetResults();
        return;
    }


    // =========================
    // CONVERT TO OTHER UNITS
    // =========================

    const fahrenheit = (celsius * 9 / 5) + 32;

    const kelvin = celsius + 273.15;


    // =========================
    // DISPLAY RESULTS
    // =========================

    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;
}


// =========================
// RESET RESULTS
// =========================

function resetResults() {

    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";
}


// =========================
// CONVERT BUTTON
// =========================

convertBtn.addEventListener("click", convertTemperature);


// =========================
// ENTER KEY SUPPORT
// =========================

temperatureInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        convertTemperature();
    }

});


// =========================
// CLEAR ERROR WHILE TYPING
// =========================

temperatureInput.addEventListener("input", function () {

    errorMessage.textContent = "";

});