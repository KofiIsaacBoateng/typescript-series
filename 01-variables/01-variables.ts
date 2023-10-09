// String 
let name = "James Bran" // not typed
let typedName: string = "James Bran" // typed

// Boolean
let isUpperCase = true // not typed
let typedIsUpperCase: boolean = true // typed


// Number
let evenPrime // not typed
let typedEvenPrime: number // typed

// ERROR:  "Type 'string' is not assignable to type 'number'.ts(2322)"
     // typedEvenPrime = "string"

// No Error: Can be assigned to values of "any" type
     // evenPrime = "String"
     // evenPrime = 2
     // evenPrime = false





export {}