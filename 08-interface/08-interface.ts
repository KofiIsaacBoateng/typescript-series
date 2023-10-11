interface User {
     readonly _id: string | boolean
     name: string,
     email: string,
     isVerified: boolean,
     role: "Tutor" | "Student" | "University",
     isActive?: boolean | string
}