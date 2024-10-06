const sum = ((nama, ...data) => {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.log(`total ${nama} is ${total}`);
});

sum('Halo', 1,2,3,4,5);// Memberikan kebebasan pada isi variabel 

const values = [10,10,10,10,10];
sum('Spread Syantax', ...values);