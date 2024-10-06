const createAdder = (value) => {
    const owner = "Lutfiya";
    const add = (param) => {
        console.log(owner);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(2);
// function addTwo(param){
//     console.log("Lutfi");
//     return 2 + param;
// }
console.log(addTwo(10));