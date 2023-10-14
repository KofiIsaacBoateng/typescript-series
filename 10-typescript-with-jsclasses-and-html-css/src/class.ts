/**  Basic class
 * 
     class Course {
          courseName: string 
          courseId: string
          readonly supervisor: string = "Kofi Boateng"
          constructor(courseName: string, courseId: string) {
               this.courseName = courseName
               this.courseId = courseId
          }
     }

     const _00 = new Course("Typescript", "00")
 * 
 */



// Possible shortcut (for the above)
class Course {
     // courseName: string 
     // courseId: string
     readonly supervisor: string = "Kofi Boateng"
     constructor(
          courseName: string, 
          courseId: string
     ) {}
          // this.courseName = courseName
          // this.courseId = courseId
     // }
}

const _00 = new Course("Typescript", "00")


// Getters and Setters
/**
 *
     class CourseId {
          _courseId: string = "00"
          constructor(courseName: string){}

          get getCourseId(): string {
               return this._courseId
          }

          set setCourseId(courseId: string | number) {
               this._courseId = courseId.toString()
          }
     }

     const course = new CourseId("Typescript")
 * 
 */





// access modifiers (public, private, protected)

class CourseId {
     private _courseId: string = "00" // accessible to this class only
     constructor(public courseName: string){} // accessible everywhere

     protected logCourseName() { // accessible inside this class and other inheriting classes, never outside
          console.log(this.courseName)
     }

     get getCourseId(): string {
          return this._courseId
     }

     set setCourseId(courseId: string | number) {
          this._courseId = courseId.toString()
     }
}

const course = new CourseId("Typescript")
//console.log(course._courseId) ** Not accessible because it is private **
console.log(course.courseName) // accessible
//console.log(course.logCourseName()) ** Not accessible because it is protected **




// interface with classes
/**
 * 
     interface TakePhoto {
          cameraMode: string
          blur: number,
          filter: string
     }

     interface Story {
          getStory: () => string
     }


     class Instagram implements TakePhoto{
          constructor(
               public cameraMode: string,
               public blur: number,
               public filter: string
          ){}
     }

     class Youtube implements TakePhoto, Story {
          constructor(
               public cameraMode: string,
               public filter: string,
               public blur: number,
               public shorts: number
          ){}

          getStory ():string {
               return "Just some text"
          }
     }
 * 
 * 
 */



// abstract classes
abstract class TakePhoto { // cannot be instantiated, only inherited
     constructor(
          public filter: string,
          public blur: number,
          public cameraMode: string
     ){}

     abstract getPhoto(): void // makes method required in all classes inheriting
     deletePhoto():void { // not required in all inheriting classes
          console.log("Photo deleted!")
     }
}

class Instagram extends TakePhoto{
     constructor(
          public cameraMode: string,
          public blur: number,
          public filter: string
     ){
          super(cameraMode, blur, filter) // must be provided for every abstract constructor referenced
     }

     getPhoto() { // required because it is abstract
          console.log("photo returned") 
     }
}

class Youtube extends TakePhoto {
     constructor(
          public cameraMode: string,
          public filter: string,
          public blur: number,
          public shorts: number
     ){
          super(cameraMode, blur, filter) // must be provided for every abstract constructor referenced
     }

     getPhoto() { // required because it is abstract
          console.log("photo returned") 
     }
}
 