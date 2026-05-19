const heros = ["IronMan", "Thor", "Captain America"];
const heros2 = ["Superman", "Batman", "Flash"];

//heros.push(heros2);
//console.log(heros);


// it modify the original array 
heros.push(heros2);
console.log(heros);

// it mades a copy of original array
heros.concat(heros2);
console.log(heros);

// spread out method

const allheros = [...heros, ...heros2];
console.log(allheros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const newArr = anotherArr.flat(Infinity);
console.log(newArr);



console.log(Array.isArray("Kunal"));
console.log(Array.from("Kunal"));
console.log(Array.from({name: "Kunal"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
