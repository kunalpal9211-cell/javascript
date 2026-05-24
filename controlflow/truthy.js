const usermail = "k@gmail.com"; // string is true by default

if (usermail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function(){}

const array = [];

if (array.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Empty Object");
}

