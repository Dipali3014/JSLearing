let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune",
    pin: 431202
 };
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// const city = person.city;

let {name, age, isMarried, city, country="Bharat"} = person;
console.log(name, age, isMarried, city, country);



let Person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune",
    pin: 431202
 };
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// const city = person.city;

//let {name, age, isMarried, city, country="Bharat"} = person;
//console.log(name, age, isMarried, city, country);


const array = ['Mona', 'Sona', 'Tona', 'Bawa'];

let [element1, element2, element3, element4, element5='Khona']= array;

console.log(element1, element2, element3, element4, element5);

const array1 = ["dipali","virendra","waghmare"];
let [num1, num2,num3] = array1
console.log(num1,num2,num3);
