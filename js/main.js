// Part: Functions 

// Normal function def
function DoSomething() {
    // Statement
}
// Arrow function def
const DoSomething = () => {
    // Statement
}
// To export the function def:
export default function DoSomething() {
    // Statement
}
export const DoSomething = () => {
    // Statement
}
// Example: (react specific)
const DoExampleFunction = () => {
    return <div>Example</div>
}
<button
    onClick={
        () => {
            console.log("Example")
        }
    }
></button>

// Part: Ternary Operator (jsx for react)

// Example:
let age = 15;
let name = "Pouya";
if (age > 10) {
    name = "Pouya"
} else {
    name = "Jack"
}
// a simpler way to define it:
let name2 = age > 10 ? "Pouya" : "jack";
// in react might happen like this:
const Component = () => {
    return age > 10 ? <div>Pouya</div> : <div>Jack</div>;
}

// Part: Objects

// person object 
const person = {
    // name3: name, // do it another way
    name,  
    age3: 20,
    isAlive2: true, // :)
}
// using object fields
const age4 = person.age3
const isAlive = person.isAlive2
// in a more simpler way
const {age3, isAlive2} = person
// copy object's everything but change name
const person2 = {...person, name: "Jessica"}  
// more stuff with '...':
let names2 = ["Pouya", "Jack", "Jessica"]
let names = [...names, "Joe"]

// Part: Three Important Functions

// the three functions:
// .map()
// .filter()
// .reduce()
// write code to be executed for each item in names
names.map((name) => {
    console.log("Welcome " + name)
    return <h1>{name}</h1>
})
let names3 = ["Pouya", "Jack", "Jessica", "Pouya", "Pouya", "Pouya"]
names3.filter((name) => {
    return name !== "Pouya"
})

// Part: Async + Await + Fetch
