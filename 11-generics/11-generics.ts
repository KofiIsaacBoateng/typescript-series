function identityOne(arg: string): string {
     return "Returned a string."
}

function identityTwo(arg: string | boolean): string | boolean {
     return true
}

// generic 
function identityThree<Type>(arg: Type):Type {
     return arg
}

identityThree(5)
identityThree("5")
identityThree(false)

// alt 

function identityFour<T>(arg: T):T { // Could be anything really
     return arg
}

identityFour(5)
identityFour("5")
identityFour(false)


// should you wish to define your own arguments using interfaces, type aliases, among others, you just gotta replace during function call
interface User {
     name: string,
     email: string,
     isVerified: boolean
}

function identityFive<Type>(arg: Type):Type {
     return arg
}

identityFive<User>({ // function call using generics
     name: "Kofi Boateng",
     email: "kofi@gmail.com",
     isVerified: true
})



{/***  Generic Arrays */}

// array parameter with index's return type
const arr01 = <Type,>(arr: Type[]): Type => { // basic idea
     return arr[0]
}

const arr02 = <Type,>(arr: Array<Type> ): Type => { // alternative syntax
     return arr[1]
}


// array return type 
const getUsers = <Type,>(arr: Array<Type>): Array<Type> => {
     return arr
}





{/**  Using Type Parameters With Generic Constraints **/}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): object {
     {/** Key extends keyof Type => limits the Key generic to only keys of the object "obj: Type" provided */}
     return {
          obj,
          key
     }
}

const x = {a: 1, b: 2, c: 3, d: 4}


getProperty(x, "a") // works without flaws
getProperty(x, "b") // works without flaws
// getProperty(x, "m") ** Won't work because "m is not a key of x" **
getProperty(x, "c") // works without flaws
// getProperty(x, "w") ** Won't work because "w is not a key of x" **
getProperty(x, "d") // works without flaws
// getProperty(x, "f") ** Won't work because "f is not a key of x" **





// The above scenario can be done for a number of scenarios
interface Database {
     email: string,
     password: string,
     googleId?: string,
     readonly _id: string | number 
}

function getUser<Type extends Database>(user: Type): Type {
     return user
}

getUser({
     email: "email@gmail.com",
     password: "password",
     googleId: "asf282kjf",
     _id: "r2fdghnmcvs"
})




{/**  Generics with classes */}

class GetData<T>{ // STILL DON'T GET IT
     public users: Array<T>

     addUser(user: T) {
          this.users.push(user)
     }
}




export {}