"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union with variables
var _id;
_id = "134736487263462";
_id = 134736487263462;
var userId = 1;
var seat; // strict types
var JAMES = {
    name: "James Bran",
    email: "bran@gmail.com",
    isVerified: true,
    _id: 234823467326742347,
};
var BOATENG = {
    role: "Admin",
    secret: "My name is not my real name ?! I don't think so!",
};
// union with function parameters
var logUserId = function (_id) {
    return _id;
};
logUserId("238482937482734"); // works
logUserId(238482937482734); // also works
// union with function return types 
var getUserId = function (email) {
    if (email) {
        return 238482937482734;
    }
    return "238482937482734";
};
getUserId(); // works 
getUserId("kofi@gmail.com"); // works 
// union with arrays 
var arr1 = ["1", "2", "3"]; // all strings
var arr2 = [1, 2, 3]; // all numbers
var arr3; // all string OR all numbers
arr3 = [1, 2, 3];
arr3 = ["1", "2", "3"];
var arr4 = ["1", 2, false, "3", 4, true]; // mix of numbers and strings and booleans
