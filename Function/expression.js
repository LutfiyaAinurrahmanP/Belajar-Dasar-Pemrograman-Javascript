const convertCelciusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}

const temperatureInFehrenheit = convertCelciusToFahrenheit(90);
console.log('Hasil konversi = ', temperatureInFehrenheit);

//Menjadi first-class citizen
function multiply(a, b){
    return a * b;
}

function calculate(operation, numA, numB){
    return operation(numA, numB);
}

const hasil = calculate(multiply, 2, 4);
console.log(hasil);

//Mengembalikan nilai function dari suatu function
function multiplier(x){
    return function (num){
        return x * num;
    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));