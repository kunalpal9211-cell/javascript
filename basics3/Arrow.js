const user = {
    username: "Kunal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

/*function chai() {
    let username = "kunal"
    console.log(this);
    console.log(this.username);
}
chai();
*/

/*const chai = function() {
    let username = "kunal"
    console.log(this.username);
}
chai();
*/

// arrow function
/*
const chai = () => {
    let username = "kunal"
    console.log(this.username);
}
chai();
*/

const chai = () => {
    let username = "kunal"
    console.log(this);
}
chai();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 3));

// implicitily 

const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Kunal"});