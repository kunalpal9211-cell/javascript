const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift"
}

// for in

for (const key in myObject) {
    console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}

const prog = ["js", "rb", "java", "cpp"];

for (const key in prog) {
    console.log(prog[key]);
}


const map = new Map();
map.set('IND', "India");
map.set('USA', "America");
map.set('AUS', "Australia");

// will not work because map are not iteretable
for (const key in map) {
    console.log(key);
}