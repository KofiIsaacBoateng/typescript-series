// basic interface ( the type alias kind )
interface User {
     readonly _id: string | number
     name: string,
     email: string,
     isVerified: boolean,
     role: "Tutor" | "Student" | "University",
     isActive?: boolean
}

const getUser = (_id: number | string ): User => {
     if (!_id) throw new Error("Please provide user's id")

     return {
          _id,
          name: "James Bran",
          email: "bran@gmail.com",
          isVerified: true,
          role: 'Student',
          isActive: false
     }
}


// interface with method declarations
interface Count {
     logCount(count: number): void;
     count: number
}

const courseCount: Count = {
     count: 0,
     logCount: (count) => {console.log(count)}
}


// interface reopening 

interface NewUser {
     name: string
     email: string
}

const you: NewUser = {
     name: "James Bran",
     email: "bran@gmail.com",
     isVerified: false // must be provided after reopening
}

interface NewUser { // reopening NewUser
     isVerified: boolean
}




//  inheritance in interfaces
interface Admin extends User { // for multiple inheritance, separate list with a comma User, NewUser, Count
     admin_role: "Admin" | "Tutor" | "Student" | "Organisation";
     admin_secret: string
}

const Headmaster: Admin = {
     admin_role: "Admin",
     admin_secret: "I sleep with the kids",
     _id: "akshdf8ywwe7ryw>|usya?fh@hhk",
     name: "James Bran",
     email: "bran@gmail.com",
     isVerified: true,
     role: 'Student',
     //isActive: true
}






export {}