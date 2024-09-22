let temperatureInFehrenheit;

//Flat arrow

//Arrow function
const convertCelciusToFahrenheit = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
}

temperatureInFehrenheit = convertCelciusToFahrenheit(90);
console.log('Hasil konversi : ', temperatureInFehrenheit);

//Refactor
const convertCelciusToFahrenheitInConciseSyntax =
    (temperature) => (9 / 5) * temperature + 32;

temperatureInFehrenheit = convertCelciusToFahrenheitInConciseSyntax(90);
console.log('Hasil Konversi : ', temperatureInFehrenheit);
