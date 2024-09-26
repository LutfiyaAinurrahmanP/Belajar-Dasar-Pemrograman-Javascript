// Mutator Function
/*
 * Array.push: menambahkan elemen di akhir dari sebuah array.
 * Array.pop: menghapus elemen terakhir dari sebuah array.
 * Array.shift: menghapus elemen pertama dari sebuah array.
 * Array.unshift: menambahkan elemen di awal dari sebuah array.
 * Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
 * Array.reverse: membalikkan urutan elemen dari sebuah array.
 * Array.sort: mengurutkan elemen dari sebuah array.
 * Object.assign: memodifikasi properti dari object.
 */

// Immutable

// Array Map
const arrMap = ['Harry', 'ROn', 'Jef', 'Thomas'].map((name) => `${name}!`);
console.log(arrMap);



// Array Filter
// Versi arrow function
const arrFilter = [1, '', 'halo', 0, null, 'harry', 14]
    .filter((item) => Boolean(item));

// Versi non arrow function
const arrFilter2 = [1, '', 'halo', 0, null, 'harry', 14]
    .filter(function (item) {
        return Boolean(item);
    });

console.log(arrFilter);
console.log(arrFilter2);



// Array reduce
const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const arrReduce = students.reduce((acc, student) => acc + student.score, 0);
console.log(arrReduce);


// Immutable Object
const user = {
    name: 'John',
    email: 'john@dicoding.com',
};

// Membekukan objek user
Object.freeze(user);

user.email = 'doe@dicoding.com';
console.log(user); 