# 🌡️ Temperature Converter

## Project Overview

Temperature Converter is a simple and responsive web application that converts temperature values between Celsius, Fahrenheit, and Kelvin.

## Objective

The objective of this project is to create an interactive temperature conversion website with input validation and accurate conversion results.

## Features

- Convert Celsius to Fahrenheit and Kelvin
- Convert Fahrenheit to Celsius and Kelvin
- Convert Kelvin to Celsius and Fahrenheit
- Numeric input validation
- Absolute zero validation
- Clear error messages
- Decimal temperature support
- Responsive design
- Clean and user-friendly interface

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Website Sections

- Temperature Input
- Unit Selection
- Convert Button
- Conversion Results
- Error Message
- Footer

## Conversion Formulas

- Celsius → Fahrenheit: `(C × 9/5) + 32`
- Fahrenheit → Celsius: `(F − 32) × 5/9`
- Celsius → Kelvin: `C + 273.15`
- Kelvin → Celsius: `K − 273.15`

## Absolute Zero Validation

The application does not accept temperatures below absolute zero.

- Celsius: `-273.15°C`
- Fahrenheit: `-459.67°F`
- Kelvin: `0 K`

A friendly error message is displayed when an invalid temperature is entered.

## Project Structure

```text
WebDev-L1-TemperatureConverter/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
    └── temperature-converter.png