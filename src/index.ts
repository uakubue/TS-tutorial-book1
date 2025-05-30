
interface Dog{
    name: string,
    age: number
}

const theDog: Dog = {
    name: "Elliot",
    age: 1,
}


console.log(theDog);


const Teachers: Array<string> = [];
const Students: Array<string> = [];


function indentity<T,U>(object1: T, object2: U): T{
    console.log("Hello my neighbours")
    return {
        ...object1,
            ...object2
    }
}

indentity("gideon", "Fela")


function makeEmptyList<S>(item: S): S{
    return item;
}
