"use strict";
const theDog = {
    name: "Elliot",
    age: 1,
};
console.log(theDog);
const Teachers = [];
const Students = [];
function indentity(object1, object2) {
    console.log("Hello my neighbours");
    return Object.assign(Object.assign({}, object1), object2);
}
indentity("gideon", "Fela");
function makeEmptyList(item) {
    return item;
}
