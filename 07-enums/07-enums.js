"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basic idea
var AISLE = 0;
var MIDDLE = 1;
var WINDOW = 2;
var graceSeat = AISLE;
/* enum scenarios */
// Scenario: example with weird IIFE js transpiled file
var WeirdUserSeat;
(function (WeirdUserSeat) {
    WeirdUserSeat[WeirdUserSeat["AISLE"] = 0] = "AISLE";
    WeirdUserSeat[WeirdUserSeat["MIDDLE"] = 1] = "MIDDLE";
    WeirdUserSeat[WeirdUserSeat["WINDOW"] = 2] = "WINDOW"; // value = 2
})(WeirdUserSeat || (WeirdUserSeat = {}));
// values accessed using the dot notation
var mySeat = WeirdUserSeat.AISLE;
var herSeat = WeirdUserSeat.MIDDLE;
var hisSeat = WeirdUserSeat.WINDOW;
var seat1 = 0 /* ResolvedWeirdUserSeat.AISLE */;
var seat3 = 1 /* ResolvedWeirdUserSeat.MIDDLE */;
var seat2 = 2 /* ResolvedWeirdUserSeat.WINDOW */;
/**
 * Sometimes you might wanna set the values to your own string or boolean or number
 *
 * You can absolutely do that, but wherever you set a number (or leave a value unassigned ) know that the next number will be an incremental of the previous
 *
 */
// example
var UserSeat;
(function (UserSeat) {
    UserSeat["AISLE"] = "aisle";
    UserSeat[UserSeat["NEXT_TO_AISLE"] = 2] = "NEXT_TO_AISLE";
    UserSeat[UserSeat["NEXT_TO_WINDOW"] = 3] = "NEXT_TO_WINDOW";
    UserSeat["WINDOW"] = "window"; // value = window
})(UserSeat || (UserSeat = {}));
var aisle = UserSeat.AISLE;
var nextToAisle = UserSeat.NEXT_TO_AISLE;
var nextToWindow = UserSeat.NEXT_TO_WINDOW;
var window = UserSeat.WINDOW;
