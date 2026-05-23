// singleton

// objject literals

const mySym = Symbol("key1");

const user = {
    name: "Kunal",
    "full name": "Kunal Pal",
    [mySym]: "mykey1", //  use [] for symbol
    class: "EE - C",
    location: "Delhi"
};

console.log(user.name);
console.log(user["name"]);

// user.full name will not work here 
console.log(user["full name"]);
console.log(user.mySym); // it is not used as symbol
console.log(user[mySym]); // this is the correct way to use symbol

user.location = "Mumbai"; // to change value
//  Object.freeze(user);           // to freeze any value

user.location = "Delhi";
console.log(user["location"]);

user.greeting = function() {
    console.log("Hello World");
}

console.log(user.greeting());

user.greeting2 = function() {
    console.log(`Hello User, ${this.name}`);
}

console.log(user.greeting2());