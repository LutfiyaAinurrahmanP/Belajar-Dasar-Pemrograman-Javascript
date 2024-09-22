const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9
};

console.log(user.name);
console.log(user['last name']);


//Mengakses menggunakan object destructuring
const { name, lastName, isMale = false } = user;
console.log(isMale, lastName)

const data = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};


// pemakaian object destructuring
const { id, email } = data;

console.log(id, email);


// tanpa memakai object destructuring
const username = data.username;
const password = data.password;

console.log(username, password);


// mengubah nilai di properti object
const account = {
    balance: 1000,
    debt: 10
};

account.balance = 2000;
console.log(account.balance);


// Menghapus properti di object
delete account.debt;
// delete account['debt'];
console.log(account);