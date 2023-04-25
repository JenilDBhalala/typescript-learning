/**
 * unknown vs any types
 */

// let data : any
// data = 20;
// data = "jenil";

// let item : string;
// item = data;  //no error in case of any type
// console.log(item)


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