// objects singleton

// const tinderUser = new Object(); // singleton

const tinderUser = {} // non singleton

tinderUser.id = "123abc";
tinderUser.name = "Kunal";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "Kunal",
        Lastname: "Pal"
    }
}

console.log(regularUser.fullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// cosnt obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com",

    },
    {
        id: 1,
        email: "h@gmail.com",

    },
    {
        id: 1,
        email: "h@gmail.com",

    },
    {
        id: 1,
        email: "h@gmail.com",

    },
]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
    courseName: "Js basics",
    price: "999",
    courseInstructor: "Kunal"
}

// course.courseIntructor

const {courseInstructor: intructor} = course;

// consol.log(courseInstructor);
console.log(intructor);

//     const navbar = () => {

//     }

// navbar(company = "Kunal")

// API

//{
//    "name": "Kunal",
//    "coursename": "Js basics",
//    "price": "free"
// }

[
    {},
    {},
    {}
]