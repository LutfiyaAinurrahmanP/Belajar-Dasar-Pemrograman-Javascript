// Membuat Set
const set = new Set();

const mySet = new Set([1, 2, 3]);
console.log(mySet);

// Menyimpan nilai di Set
mySet.add(1); // tidak bertambah karena set tidak dapat duplikat
mySet.add(2);
mySet.add('apple');
console.log(mySet);

// Mengakses nilai Set
for (const number of mySet){
    console.log(number);
}

mySet.forEach((value) => console.log(value));

// Menghapus nilai di set
mySet.delete(1);
console.log(mySet);