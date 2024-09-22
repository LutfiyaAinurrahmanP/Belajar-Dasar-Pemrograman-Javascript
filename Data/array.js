// Membuat array

// Menggunakan object constructuor
const users = new Array();
const number = new Array(5);
console.log(users);

// Menggunakan sintaks Array.from
const foo = Array.from('foo');
console.log(foo);

const dataArray = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(dataArray);
console.log(customer);

// Menggunakan array literal
const array = [];
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);


// Mengakses element array
const myArray = [42, 55,30];
console.log(myArray[1]);


// Memanipulasi nilai array

// Menggunakan indexing
myArray[1] = 10; // merubah nilai array pad indeks tertentu
console.log(myArray[1]);

// Menggunakan push
myArray.push(6); // menambahkan nilai diarray terakhir
console.log(myArray);

// Menghapus element dan data array
delete myArray[1]; // menghapus data pada array
console.log(myArray);

myArray.splice(1,1); // menghapus data dan element dimulai dari indeks 1, dengan panjang penghapusan 1
console.log(myArray);

myArray.pop(); // Menghapus element terakhir
myArray.shift(); // Menghapus element pertama
console.log(myArray);


//  Array desctructuring
// Untuk melihat isi array dengan menggunakan nama variabel
const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting);


// Array method
// Membalikkan nilai array
const arrayMethod = ['Android', 'Data Science', 'Web'];
arrayMethod.reverse();
console.log(arrayMethod);
// Mengurutkan data array
arrayMethod.sort();
console.log(arrayMethod); // Mengurutkan data secara ascending abjad