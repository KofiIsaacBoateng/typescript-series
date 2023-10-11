// basic idea
const AISLE = 0
const MIDDLE = 1
const WINDOW = 2

const graceSeat = AISLE


/* enum scenarios */

// Scenario: example with weird IIFE js transpiled file
enum WeirdUserSeat {
     AISLE, // default value is 0 and is incremental onto the next
     MIDDLE, // value = 1
     WINDOW // value = 2
}
// values accessed using the dot notation
const mySeat = WeirdUserSeat.AISLE 
const herSeat = WeirdUserSeat.MIDDLE
const hisSeat = WeirdUserSeat.WINDOW


// Scenario: avoiding weird IIFE
const enum ResolvedWeirdUserSeat {
     AISLE, // default value is 0 and is incremental onto the next
     MIDDLE, // value = 1
     WINDOW
}
const seat1 = ResolvedWeirdUserSeat.AISLE 
const seat3 = ResolvedWeirdUserSeat.MIDDLE
const seat2 = ResolvedWeirdUserSeat.WINDOW



/**
 * Sometimes you might wanna set the values to your own string or boolean or number
 * 
 * You can absolutely do that, but wherever you set a number (or leave a value unassigned ) know that the next number will be an incremental of the previous
 * 
 */


// example
enum UserSeat {
     AISLE = "aisle", // value = 'aisle'
     NEXT_TO_AISLE = 2, // value = 2
     NEXT_TO_WINDOW, // value = 3
     WINDOW = "window" // value = window
}


const aisle = UserSeat.AISLE
const nextToAisle = UserSeat.NEXT_TO_AISLE
const nextToWindow = UserSeat.NEXT_TO_WINDOW
const window = UserSeat.WINDOW


export {}