function convertTemperature() {
    var celsius = parseFloat(document.getElementById("inputCelsius").value);
    var fahrenheit = celsius * 9/5 + 32;
    var kelvin = celsius + 273.15;

    var result = celsius + "°C = " + fahrenheit.toFixed(2) + "°F = " + kelvin.toFixed(2) + "K";
    document.getElementById("result").innerHTML = result;
}
