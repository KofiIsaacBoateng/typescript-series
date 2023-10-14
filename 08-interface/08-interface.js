"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUser = function (_id) {
    if (!_id)
        throw new Error("Please provide user's id");
    return {
        _id: _id,
        name: "James Bran",
        email: "bran@gmail.com",
        isVerified: true,
        role: 'Student',
        isActive: false
    };
};
var courseCount = {
    count: 0,
    logCount: function (count) { console.log(count); }
};
var you = {
    name: "James Bran",
    email: "bran@gmail.com",
    isVerified: false // must be provided after reopening
};
var Headmaster = {
    admin_role: "Admin",
    admin_secret: "I sleep with the kids",
    _id: "akshdf8ywwe7ryw>|usya?fh@hhk",
    name: "James Bran",
    email: "bran@gmail.com",
    isVerified: true,
    role: 'Student',
    //isActive: true
};
