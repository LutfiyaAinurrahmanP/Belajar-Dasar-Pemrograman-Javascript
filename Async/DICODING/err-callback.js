function makeCoffee(name, callback) {
    const estimation = 5000;
    let isSuccess = false;

    // Match.ceil = untuk membuatkan hasil perhitungan
    const inSecond = Math.ceil(estimation / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

    setTimeout(() => {
        // Penentuan hasil dari proses asinkron
        const number = Math.random();
        if (number > 0.3) {
            isSuccess = true;
        }
        if (!isSuccess) {
            callback(new Error(`Gagal membuatkan kopi`), null);
            return;
        }

        console.log(`Pramusaji selesai membuat kopi`);
        callback(null, name);
    }, estimation);
}

function sendCoffee(name, callback) {
    const estimation = 2000;
    let isSuccess = false;

    console.log(`Pramusaji sedang mengantar kopi pesanan`);

    setTimeout(() => {
        // Penentuan hasil dari proses asinkron
        const number = Math.random();
        if (number > 0.3) {
            isSuccess = true;
        }
        if(!isSuccess){
            callback(new Error(`Gagal mengantarkan kopi.`), null);
            return;
        }

        console.log(`Pramusaji sampai ke meja`);
        callback(null, name);
    }, estimation);
}

const order = 'Kopi Espresso';
console.log(`Saya memesan ${order} di kafe`);
makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
    if(makeCoffeeError) {
        console.error(makeCoffeeError);
        return;
    }
    sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
        if(sendCoffeeError){
            console.error(sendCoffeeError);
            return;
        }
        console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan`);
        console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya`);
    });
})
