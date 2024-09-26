function makeCoffee(callback) {
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log(`Pramusaji selesai membuat kopi`);
        callback();
    }, estimationTime);
}

function sendCoffee(callback) {
    const estimationTime = 2000;

    console.log(`Pramusaji sedang mengantarkan kopi pesanan`);

    setTimeout(() => {
        console.log(`Pramusaji sudah sampai ke meja`);
        callback();
    }, estimationTime);
}

console.log(`Saya memesan kopi di kafe`);

makeCoffee(() => {
    sendCoffee(() => {
        console.log(`Pramusaji memberikan kopi pesanan`);
        console.log(`Saya mendapatkan kopi dan menghabiskannya`);
    })
})