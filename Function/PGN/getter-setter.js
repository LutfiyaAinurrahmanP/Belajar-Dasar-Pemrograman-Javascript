const person = {
    firstName: "Lutfiya",
    lastName: "Ainurrahman",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(val) {
        const array = val.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
}

console.log(person.fullName);

person.fullName = "A B";
console.log(person);

person.fullName = "C D";
console.log(person);

person.fullName = "E F";
console.log(person);