// basic interface
interface User {
     readonly _id: string | number
     name: string,
     email: string,
     isVerified: boolean,
     role: "Tutor" | "Student" | "University",
     isActive?: boolean | string
}

const getUser = (_id: number | string ): User => {
     if (!_id) throw new Error("Please provide user's id")

     return {
          _id,
          name: "James Bran",
          email: "bran@gmail.com",
          isVerified: true,
          role: 'Student',
          isActive: "false"
     }
}