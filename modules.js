const abc = require("./people");

console.log(abc);

// console.log(people);

// const data = require('./people');  people and ages now assigned to data as they were exported

// console.log(data.people, data.ages);

// const { people, ages } = require('./people');

// console.log(people, ages);

const os = require("os");

console.log(os.platform(), os.homedir());
