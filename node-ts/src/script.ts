// Declare a string variable
let text: string = "Hello Node.js";
console.log(text);

// Import the 'fs' module for file system operations
import fs from "fs";

// Callback function to handle the result of the write operation
function doneWriting(err: NodeJS.ErrnoException | null): void {
    if (err) {
        return console.error('This is an error message:', err.message);
    }

    console.log("Data written successfully");
}

// Write the string 'text' to a file named 'data.txt' in the 'src' directory
fs.writeFile("src/data.txt", text, doneWriting);
