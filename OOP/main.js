class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Membuat instance dari Person
const person1 = new Person('Lutfiya', 20);
const person2 = new Person('Amalia', 21);

person1.eat();
person2.eat();