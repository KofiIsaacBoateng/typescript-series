"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identityOne(arg) {
    return "Returned a string.";
}
function identityTwo(arg) {
    return true;
}
// generic 
function identityThree(arg) {
    return arg;
}
identityThree(5);
identityThree("5");
identityThree(false);
// alt 
function identityFour(arg) {
    return arg;
}
identityFour(5);
identityFour("5");
identityFour(false);
function identityFive(arg) {
    return arg;
}
identityFive({
    name: "Kofi Boateng",
    email: "kofi@gmail.com",
    isVerified: true
});
{ /***  Generic Arrays */ }
// array parameter with index's return type
var arr01 = function (arr) {
    return arr[0];
};
var arr02 = function (arr) {
    return arr[1];
};
// array return type 
var getUsers = function (arr) {
    return arr;
};
{ /**  Using Type Parameters With Generic Constraints **/ }
function getProperty(obj, key) {
    { /** Key extends keyof Type => limits the Key generic to only keys of the object "obj: Type" provided */ }
    return {
        obj: obj,
        key: key
    };
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // works without flaws
getProperty(x, "b"); // works without flaws
// getProperty(x, "m") ** Won't work because "m is not a key of x" **
getProperty(x, "c"); // works without flaws
// getProperty(x, "w") ** Won't work because "w is not a key of x" **
getProperty(x, "d"); // works without flaws
function getUser(user) {
    return user;
}
getUser({
    email: "email@gmail.com",
    password: "password",
    googleId: "asf282kjf",
    _id: "r2fdghnmcvs"
});
{ /**  Generics with classes */ }
var GetData = /** @class */ (function () {
    function GetData() {
    }
    GetData.prototype.addUser = function (user) {
        this.users.push(user);
    };
    return GetData;
}());
