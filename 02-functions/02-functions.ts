// parameter types

function addTwoNumbers (x: number, y: number) {
     return x + y
}

function echoName (name: string) {
     console.log(name)
}

function login(email: string, password: string, isHuman: boolean) {
     if (!email || !password  || !isHuman){
          console.log("Please provide credentials!")
          return
     }

     console.log("User login successful!")
}

// default parameter for isHuman
function register(username: string, email: string, password: string, isHuman: boolean = false) { // default parameter for isHuman
     if (!email || !password || !username){
          console.log("Please provide credentials!")
          return
     }

     console.log("Registration successful!")
}
 




// return value types
function minus (x: number, y: number): number {
     return x - y
}

function getName(name: string): string {
     return name
}

function isFaulty (problem: string): boolean {
     if(problem) return true
     else return false
}

function logName (name: string): void {
     console.log(name)
}




// ERROR LOGS
function errorLog (errorMessage: string): never{
     throw new Error(errorMessage)
}


//Arrow functions

const loginUser = (email: string, password: string ): void => {
     console.log("User logged in successfully!")
}


export {}