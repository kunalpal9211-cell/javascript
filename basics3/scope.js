// var is independent of scope({})

var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(c);


function one() {
    const username =  "Kunal"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    console.log(website);

    two();
}

one();