function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

Person.prototype.sayBye = function(){
    console.log("Good Bye");
}

Person.prototype.run = function(){
    console.log((`${this.firstName} is Running`));
}

const eko = new Person("Eko", "Khanedy");
console.log(eko);