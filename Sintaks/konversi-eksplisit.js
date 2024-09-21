//Mengubah ke String
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);


//Mengubah ke Number
const numFromString = Number(strNumber);
const boolFromString = Boolean(strBoolean);
const numFromBoolean = Number(boolFromString);

console.log(numFromString);
console.log(numFromBoolean);


//Mengubah ke Int dan Float
const cm = '2.7cm';
const px = '64px';

const floatFromCM = parseInt(px);
const intFromPX = parseFloat(cm);

console.log(floatFromCM);
console.log(intFromPX);


//Merubah ke Boolean
const empty = null;
const name = 'Dicoding';

const boolFromName = Boolean(name);
const boolFromNul = Boolean(empty);

console.log(boolFromNul);
console.log(boolFromName);

/*
    Nilai Falsy : 
    false
    0
    -0
    0n
    ''
    null
    undefined
NaN
*/


//Konversi Implisit
const nomor = '123';
const result = nomor * 2;

console.log(result);