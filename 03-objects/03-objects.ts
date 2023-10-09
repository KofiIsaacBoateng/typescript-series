// object type declaration a.k.a ALIAS
type User = {
     name: string;
     email: string;
     isPaid: boolean;
     price: number;
}

// objects as function parameters
function createUser(user: User) {
     console.log(`User: ${user.name} account created!`)
}

// object as function return value
function removeUser({email, name}: User):{name: string, email: string} {
     return {
          name: name,
          email: email
     }
} // NOT RECOMMENDED (rather use the type alias)

type Removed = {
     name: string;
     email: string;
}

function recommendedRemoveUser({email, name}: User): Removed{
     return {
          name: name,
          email: email
     }
}// HIGHLY RECOMMENDED PROCEDURE




// read only and optional types 

type Course = {
     readonly _id: string, // read only
     course_name: string;
     description?: string; // option
     is_professional: boolean
}



// adjoining multiple type aliases

type CardNumber = {
     num: number
}

type CardDate = {
     date: string
}

type CardDetails = CardNumber & CardDate & {
     cvv: number
}




export {}