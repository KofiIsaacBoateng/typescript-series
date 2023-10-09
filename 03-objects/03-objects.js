"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// objects as function parameters
function createUser(user) {
    console.log("User: ".concat(user.name, " account created!"));
}
// object as function return value
function removeUser(_a) {
    var email = _a.email, name = _a.name;
    return {
        name: name,
        email: email
    };
} // NOT RECOMMENDED (rather use the type alias)
function recommendedRemoveUser(_a) {
    var email = _a.email, name = _a.name;
    return {
        name: name,
        email: email
    };
} // HIGHLY RECOMMENDED PROCEDURE
