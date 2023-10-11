"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tuples are basically positional strict types
var testTuple = [0, false, "false"];
var rgb;
rgb = [222, 123, 244]; // works
// rgb = [123, 121] ** doesn't work **
// rgb = [123, 132, 12, 23]  ** doesn't work either
var rgba = [12, 121, 23, 0.5];
// user-info [_id, email, passcode, isOnline]
var userInfo;
userInfo = [111, "kofi@gmail.com", 332211445566, true];
userInfo = ["222", "james@gmail.com", 27487328228, false];
// userInfo = ["222", false, "james@gmail.com", 27487328228] ** doesn't work **
// Caveats that need to be checked out
// Caveat(stack-overflow):  ** typescript-array-push-method-cant-catch-a-tuple**
userInfo.push("just some unexpected value... and it still works without typescript catching it!");
userInfo[1] = "bran@gmail.com";
