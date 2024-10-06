// {
//     const names = ["Lutfiya", "Ainurrahman", "Prasetyo", "Amalia", "Dyah"];
//     let[firstName, middleName, lastName, ...other] = names;

//     console.log(firstName);
//     console.log(middleName);
//     console.log(lastName);
//     console.log(other);
// }
// {
//     const person = {
//         firstName: "Amalia",
//         middleName: "Dyah",
//         lastName: "Puspita",
//         address: {
//             city: "Kalimantan Timur",
//             country: "Indonesia"
//         },
//         hobby: "Bernyanyi"
//     }
//     let {firstName,middleName,lastName, ...others} = person;
//     console.log(firstName);
//     console.log(middleName);
//     console.log(lastName);
//     console.log(others);
// }

// // Destructuring Nested Object
// {
//     const person = {
//         firstName: "Amalia",
//         middleName: "Dyah",
//         lastName: "Puspita",
//         address: {
//             city: "Kalimantan Timur",
//             country: "Indonesia"
//         },
//         hobby: "Bernyanyi"
//     }
//     let {firstName,address:{city, country}, ...others} = person;
//     console.log(firstName);
//     console.log(city);
//     console.log(country);
//     console.log(others);
// }

// Destructuring di Function parameter
{
    const displayPerson = ({firstName, middleName, lastName}) => {
        console.log(firstName);
        console.log(middleName);
        console.log(lastName);
    }
    const person = {
        firstName: "Amalia",
        middleName: "Dyah",
        lastName: "Puspita"
    }
    displayPerson(person);

    // contoh pada array
    function sum([first, second = 13 ]){ // second sebagai default value
        return first + second;
    }
    console.log(sum([1,1]));
    console.log(sum([10,10]));
}