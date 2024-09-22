// Membuat map dengan object map dconstructor
const map = new Map();


// Inisialisasi map
const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);
console.log(productMap);


// Menyimpan nilai di Map
// set(key, value)
const inMap = new Map();

inMap.set('name', 'lutfiya');
console.log(inMap);

inMap.set(1, 'Halo');
console.log(inMap);

// Mengakses nilai di Map
console.log(inMap.get(1));

// Menghapus nilai map
inMap.delete(1);
console.log(inMap);


// Kesimpulan
/*
 * set = menambah nilai map
 * get = mengakses nilai map
 * delete = menghapus nilai map
 */