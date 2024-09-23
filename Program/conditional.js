// Materi ini tentang if, else if, dan else

// Ternary operator
// Bentuk dasar ternary operator
// let result = condition ? value1 : value2;

const price = 10000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda Mendapat discount sebesar ${discount * price}`);


// Switch case
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}