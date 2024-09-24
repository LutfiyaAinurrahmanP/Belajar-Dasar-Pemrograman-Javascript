// Mengambil default import
import myFunction from '../Export/mainEx.mjs';
myFunction();

import result from '../Export/mainEx.mjs';
result();



// Mengambil named import
import { myExp } from '../Export/mainEx.mjs';
myExp();



// Import name, email, age
// import { name, email, age } from '../Export/mainEx.mjs';

// console.log(name);
// console.log(email);
// console.log(age);
import * as variable from '../Export/mainEx.mjs';
console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

import { myFunction as userFunction } from '../Export/user.mjs';
import { myFunction as customerFunction } from '../Export/customer.mjs';
userFunction();
customerFunction();