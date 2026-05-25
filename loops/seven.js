// reduce

const myNums = [1, 2, 3, 4, 5];

//const myTotal = myNums.reduce(function (acc, currval) {
  //  console.log(`acc: ${acc} val: ${currval}`);
   // return acc + currval;
// }, 0);

//const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0);
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "mobile development course",
        price: 5999
    },
    {
        itemName: "data scientist course",
        price: 12999
    }
];

let total = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(total);