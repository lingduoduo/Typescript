"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Declare a string variable
let text = "Hello Node.js";
console.log(text);
// Import the 'fs' module for file system operations
const fs_1 = __importDefault(require("fs"));
// Callback function to handle the result of the write operation
function doneWriting(err) {
    if (err) {
        return console.error('This is an error message:', err.message);
    }
    console.log("Data written successfully");
}
// Write the string 'text' to a file named 'data.txt' in the 'src' directory
fs_1.default.writeFile("src/data.txt", text, doneWriting);
