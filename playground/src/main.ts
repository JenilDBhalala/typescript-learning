/**
 * unknown vs any types : top types
 */

/*
let data : any
data = 20;
data = "jenil";

let item : string;
item = data;  //no error in case of any type
console.log(item)
*/



/*
let data: unknown;
data = "jenil"
data = 20;

if (typeof data === "string")
    console.log(data, "data is typeof string")
else if (typeof data === 'number') {
    console.log(data, "data is typeof number")
}
*/



// let data : unknown
// data = 20;
// data = "jenil"

// let item : string;
// item = data;   //error in case of unknown type
// console.log(item)



/**
 * type assertions
 */

// let data : unknown
// data = 20;
// data = "jenil"

// let item : string;
// item = data as string;  //give more specific type using type assertions
// console.log(item)



/**
 * generics
 */

/*
const addOrConcat = <T>(a: T, b: T): T => {
    if((typeof a === 'string' && typeof b === "string"))
        return a + b as T;
    else if(typeof a === 'number' && typeof b === "number")
        return a + b as T;
    throw new Error("Not valid types")
}
  
console.log(addOrConcat(3,4))
console.log(addOrConcat("Jenil","Bhalala"))
console.log(addOrConcat(true,false))
*/


/*
type t<T> = (a:T, b:T) => T

const addOrConcat : t<string|number> = (a, b) => {
    if((typeof a === 'string' && typeof b === "string"))
        return a + b as string;
    else if(typeof a === 'number' && typeof b === "number")
        return a + b as number;
    throw new Error("Not valid types")
}
  
console.log(addOrConcat(3,4))
console.log(addOrConcat("Jenil","Bhalala"))
console.log(addOrConcat(true,false))
*/



/**
 * utility types : used for common type transformations
 */

/*
// 1.Pick<Type, Keys>

// interface User {
//     name : string,
//     age : number,
//     address : string,
//     occupation : string
// }

type User = {
  name: string
  age: number
  address: string
  occupation: string
}

type BasicUser = Pick<User, "name" | "age">

// type BasicUser = {
//   name: string;
//   age: number;
// }
*/


/*
// 2. Omit<Type, Keys>

type User = {
    name: string
    age: number
    address: string
    occupation: string
}

type BasicUser = Omit<User, "address" | "occupation">

// type BasicUser = {
//   name: string;
//   age: number;
// }

*/



/*
// 3. Partial<Type>

type User = {
    name: string
    age: number
    address: string
    occupation: string
}

type PartialUser = Partial<User>

// type PartialUser = {
//   name?: string;
//   age?: number;
//   address?: string;
//   occupation?: string;
// }

*/



/*
// 4. Required<Type>

type PartialUser = {
    name: string
    age: number
    address?: string
    occupation?: string
}

type User = Required<PartialUser>

  // type User = {
  //   name: string;
  //   age: number;
  //   address: string;
  //   occupation: string;
  // }

*/


/*
// 5. Readonly<Type>

type User = {
    name: string
    age: number
    address: string
    occupation: string
}

type ReadOnlyUser = Readonly<User>

const user: ReadOnlyUser = {
    name: "Peter",
    age: 24,
    address: "Toronto",
    occupation: "software_engineer"
}

user.name = "Tom"
// Cannot assign to 'name' because it is a read-only property.

*/


/*

//6. Record<Keys, Type>
//suppose you want to create multiple objects of one type into another type

type User = {
    name: string
    age: number
    address: string
    occupation: string
}

type Team = Record<"player1" | "player2", User>

const team : Team = {
    player1 : {
        name : "jenil",
        age : 21,
        address : "abc",
        occupation : "software engineer"
    },
    player2 : {
        name : "bhavin",
        age : 21,
        address : "cde",
        occupation : "software engineer"
    }
}
// type Team = {
//   player1: User;
//   player2: User;
// }
*/



/*
//7. ReturnType<Type>

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

*/


/* 
// 8.Parameters<Type>  : returns tuple of parameters from function

// A save function in an external library
function save(person : {id: string, name: string, email: string}) {
    console.log('Saving', person);
}

// Ensure that ryan matches what is expected by `save`
const ryan: Parameters<typeof save>[0] = {
    id: '1337',
    name: 'Ryan',
    email: 'ryan@example.com',
};
*/



/*
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

//9. Exclude<UnionType, ExcludedMembers>
//10. Extract<Type, Union>
//11. NonNullable<Type>
type adjustedGrade = Exclude<LetterGrades, "U" | "D">
type highGrades = Extract<LetterGrades, "A" | "B">


type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

*/


/*
//12. Awaited<Type> 
//helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

*/


/**
 * user-defined type-guard
 */

/*
interface Cat {
    name: string;
    meow: () => void;
}

interface Dog {
    name: string;
    bark: () => void;
}

function isCat(pet: Cat | Dog): pet is Cat {
    return (pet as Cat).meow !== undefined;
}

function playWithPet(pet: Cat | Dog) {
    if (isCat(pet)) {
        pet.meow();
    } else {
        pet.bark();
    }
}
*/



/**
 * index signatures
 */
/*
interface Obj {
    [key : string] : string
}

const obj : Obj = {
    "name" : "jenil",
    "age" : "22",
    "address" : "surat"
}
*/




/**
 * keyof operator : The keyof keyword in TypeScript has many use cases, 
 * but one of the most common is for type-safe property access and manipulation.
 */

/*
type Person = {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
};


function getProp(person: Person, key: keyof Person) {
    return person[key];
}

const john: Person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};

console.log(getProp(john, 'name')); // Output: John
console.log(getProp(john, 'age')); // Output: 30
console.log(getProp(john, 'address')); // Output: { street: '123 Main St', city: 'Anytown' }
*/




/**
 * decorators
 */

/*
//method decorator
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with`, args);
        const result = originalMethod(...args);
        console.log(`Result of ${key} is`, result);
        return result;
    };
    return descriptor;
}


class Calculator {
    @log
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(2, 3); // Output: Calling add with [2, 3] Result of add is 5
*/


/*
//class decoration
function logClass(target: any) {
    console.log(`Class ${target.name} has been logged!`);
}

//decoration factory
function addMethods(methods: string[]) {
    return function (target: any) {
        methods.forEach(method => {
            target.prototype[method] = function () {
                console.log(`Method ${method} has been added to ${target.name}.`);
            }
        });
    }
}

@logClass
@addMethods(["newMethod1", "newMethod2"])
class MyClass {
    constructor(public name: string) { }
}

const myInstance = new MyClass("John");
myInstance.newMethod1();
myInstance.newMethod2();
*/




//accessor decorator
function logProperty(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        console.log(`Getting ${key} value...`);
        return originalGetter.call(this);
    }
}

class MyClass {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    @logProperty
    get name() {
        return this._name;
    }
}

const myInstance = new MyClass("John");
console.log(myInstance.name);



/*
//property decorator
function myPropertyDecorator(target: any, key: string) {
    console.log(`Decorating property ${key} in ${target.constructor.name}`);
}

class MyClass {
    @myPropertyDecorator
    myProperty: string = 'hello';
}

const instance = new MyClass();
*/


const car = {
    name : 'BMW',
    color : 'black'
}

console.log(Object.getOwnPropertyDescriptor(car, 'name'))

Object.defineProperty(car, 'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(car, 'name'))
car.name = "Mercedes"
