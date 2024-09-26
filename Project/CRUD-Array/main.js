let penduduk = [];

// Menambahkan data baru ke array (Immutable)
function createPenduduk(array, pendudukBaru) {
    return [...array, pendudukBaru]
}

// Menampilkan semua data penduduk
function readPenduduk(array) {
    return array.forEach(item => console.log(item));
}

// Mengubah data penduduk berdasarkan id (Immutable)
function updatePenduduk(array, id, dataBaru) {
    return array.map(penduduk => 
        penduduk.id === id ? { ...penduduk, ...dataBaru } : penduduk
    );
}

// Menghapus data penduduk berdasarkan id (Immutable)
function deletePenduduk(array, id) {
    return array.filter(penduduk => penduduk.id !== id);
}

// Penggunaan CRUDnya

// Create
penduduk = createPenduduk(penduduk, { id: 4, nama: "Dewi", usia: 28 });
console.log("Setelah CREATE:");
readPenduduk(penduduk);

// Update
penduduk = updatePenduduk(penduduk, 4, { nama: "Budi Santoso", usia: 26 });
console.log("\nSetelah UPDATE:");
readPenduduk(penduduk);

// Delete
penduduk = deletePenduduk(penduduk, 4);
console.log("\nSetelah DELETE:");
readPenduduk(penduduk);
