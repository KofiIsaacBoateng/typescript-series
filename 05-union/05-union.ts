// union with variables
let _id: string | number
_id = "134736487263462"
_id = 134736487263462

const userId: string | number = 1
let seat: "aisle" | "middle" | "window" // strict types
// seat = "cockpit"  ** produces error **
 


//union with type aliases aka objects
type User = {
     readonly _id: number | string
     name: string
     email: string
     isVerified: string | boolean
}

type Admin = {
     role: "Admin" | "Tutor"
     secret: string
}

type Person = Admin | User


const JAMES: Person = {
     name: "James Bran",
     email: "bran@gmail.com",
     isVerified: true,
     _id: 234823467326742347,
}

const BOATENG: Person = {
     role: "Admin",
     secret: "My name is not my real name ?! I don't think so!",
}



// union with function parameters
const logUserId = (_id: string | number) => {
     return _id
}

logUserId("238482937482734") // works
logUserId(238482937482734) // also works




// union with function return types 
const getUserId = (email?: string): string | number => {
      if (email){
          return 238482937482734
      }

      return "238482937482734"
}

getUserId() // works 
getUserId("kofi@gmail.com") // works 






// union with arrays 
const arr1: string[] = ["1", "2", "3"] // all strings
const arr2: number[] = [1, 2, 3] // all numbers
let arr3: string[] | number[] // all string OR all numbers
arr3 = [1, 2, 3]; arr3 = ["1", "2", "3"]
const arr4: (string | number | boolean)[] = ["1", 2, false, "3", 4, true]  // mix of numbers and strings and booleans



export {}