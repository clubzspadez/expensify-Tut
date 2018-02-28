// console.log('yolo');

// Object destructuring 
// const person = {
//   name:'Jonathan',
//   age: 25,
//   location: {
//     city : 'Worcester',
//     temp: 92
//   }
// };

// //specifiy the properties you want to destructor from the object
// const {name , age} = person;

// console.log(`${name} and ${age}`);

// //specifiy the properties you want to destructor from the object's object

// const { city, temp } = person.location;

// //specify consts from the objects
// const { city: location , temp: temperature} = person.location;
// console.log(`${location} and ${temperature}`);

// const book = {
//   title: 'I like audio',
//   author: 'ME',
//   publisher: {
//     name: 'Howser'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);


// array destructuring

// const address = ['West wood st', 'Worcester', 'Mass', '01401'];

// const [ street,   ] = address;

// console.log(`YOOO hit me with the ${street} ${city}`);

// const item = ['Coffee Hot', '$2.00', '$2.50', '$2.75'];

// const [ coffee, smallCost, mediumCost, largeCost ] = item;

// console.log(`A medium ${coffee} costs ${mediumCost}`);



const array = ['jackie', 'jojo', 'blue'];

const [ jackie, , blue ] = array;
 
console.log(blue);