function sumNumber(a, b) {
    const result = a + b;
    return result;
}

const result = sumNumber(2, 4);
console.log('2 + 4 = ' + result);

function convertCelciusToFahrenheit(temperature) {
    const hitung = (9 / 5) * temperature + 32;
    return hitung;
}

const temperatureInFehrenheit = convertCelciusToFahrenheit(90);
console.log('Hasil konversi = ' + temperatureInFehrenheit)