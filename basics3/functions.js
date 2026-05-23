

function sayMyName() {
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
}

// sayMyName();

function addNum(Num1, Num2) {
    console.log(Num1 + Num2);
}

function addNum(Num1, Num2) {
    let ans = Num1 + Num2;
    return ans;
}

const ans = addNum(3, 4);
console.log(ans);

function loginUserMsg(username) {
    if (!username) {
        console.log("Enter a username");
        return
    }
    return `${username} just logged in!`;
}

console.log(loginUserMsg("Kunal"));
console.log(loginUserMsg());


function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Kunal",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

