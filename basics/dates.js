// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let newDate = new Date(2026, 5, 20);
console.log(newDate.toDateString());

let new2Date = new Date("01-12-2026");
console.log(new2Date.toDateString());

let myTimeStamp = Date.now();

//now compare them to find time because the output is in milisec

console.log(myTimeStamp);
console.log(new2Date.getTime());

// in seconds

console.log(Math.floor(Date.now()/1000));

// customization in date and time

newDate.toLocaleString('default', {
    weekday: "long",
})f