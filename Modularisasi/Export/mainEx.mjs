// Default Export
export default function myFunction() {
    console.log('Ini adalah function export default');
}

// Named export
export function myExp() {
    console.log('Ini adalah named import');
}

const name = 'Lutfiya';
const email = 'lutfiyapr.creative@gmail.com';
const age = 20;

export {name, email, age};