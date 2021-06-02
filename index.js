const { arrayContaining } = require("expect")

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driverArray, name){
    return driverArray.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(driverArray, name){
    return driverArray.filter(person => name[0].toLowerCase() === person[0].toLowerCase())
};

function matchName(driverArray, name){
    return driverArray.filter(person => person.name === name);

}