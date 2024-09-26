// const estimation = 10_000;

// setTimeout(() => {
//     console.log('Hello WOrld')
// }, estimation)

function makeCoffee() {
    const estimation = 10000;
    const inSecond = Math.ceil(estimation / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log(`Pramusaji selesai membuat kopi`)
    }, estimation);
}

console.log(`saya memesan kopi`);

makeCoffee();

console.log(`Pramusaji memberikan kopi pesanan`);
console.log(`Saya mendapatkan kopi dan menghabiskannya`);