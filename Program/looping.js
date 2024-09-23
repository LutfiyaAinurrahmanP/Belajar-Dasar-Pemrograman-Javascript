// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
}

// For in
const person = {
    name: 'Fulan',
    origin: 'Bandung',
    birthDay: 2024
};

for (const property in person){
    console.log(`${property} bernilai ${person[property]}`);
}

// For of
const names = ['bebek', 'ayam', 'telor', 'tempe'];
for (const item of names){
    console.log(item);
}

// Control statement
// Break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
  
    console.log(i);
  }

// Continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
  }