"use strict";
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
    constructor(courseName, courseId) {
        // courseName: string 
        // courseId: string
        this.supervisor = "Kofi Boateng";
    }
}
const _00 = new Course("Typescript", "00");
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
    constructor(courseName) {
        this.courseName = courseName;
        this._courseId = "00"; // accessible to this class only
    } // accessible everywhere
    logCourseName() {
        console.log(this.courseName);
    }
    get getCourseId() {
        return this._courseId;
    }
    set setCourseId(courseId) {
        this._courseId = courseId.toString();
    }
}
const course = new CourseId("Typescript");
//console.log(course._courseId) ** Not accessible because it is private **
console.log(course.courseName); // accessible
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
class TakePhoto {
    constructor(filter, blur, cameraMode) {
        this.filter = filter;
        this.blur = blur;
        this.cameraMode = cameraMode;
    }
    deletePhoto() {
        console.log("Photo deleted!");
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, blur, filter) {
        super(cameraMode, blur, filter); // must be provided for every abstract constructor referenced
        this.cameraMode = cameraMode;
        this.blur = blur;
        this.filter = filter;
    }
    getPhoto() {
        console.log("photo returned");
    }
}
class Youtube extends TakePhoto {
    constructor(cameraMode, filter, blur, shorts) {
        super(cameraMode, blur, filter); // must be provided for every abstract constructor referenced
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.blur = blur;
        this.shorts = shorts;
    }
    getPhoto() {
        console.log("photo returned");
    }
}
