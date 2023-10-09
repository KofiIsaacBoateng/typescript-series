"use strict";
// parameter types
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(x, y) {
    return x + y;
}
function echoName(name) {
    console.log(name);
}
function login(email, password, isHuman) {
    if (!email || !password || !isHuman) {
        console.log("Please provide credentials!");
        return;
    }
    console.log("User login successful!");
}
// default parameter for isHuman
function register(username, email, password, isHuman) {
    if (isHuman === void 0) { isHuman = false; }
    if (!email || !password || !username) {
        console.log("Please provide credentials!");
        return;
    }
    console.log("Registration successful!");
}
// return value types
function minus(x, y) {
    return x - y;
}
function getName(name) {
    return name;
}
function isFaulty(problem) {
    if (problem)
        return true;
    else
        return false;
}
function logName(name) {
    console.log(name);
}
// ERROR LOGS
function errorLog(errorMessage) {
    throw new Error(errorMessage);
}
//Arrow functions
var loginUser = function (email, password) {
    console.log("User logged in successfully!");
};
