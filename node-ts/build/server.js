"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
app.get("/hello", (req, res) => {
    res.send(`Hello, npx nodemon --watch ./src/server.ts --exec ts-node src/server.ts `);
});
app.listen(3000, function () {
    console.log(`Server started on http://localhost:3000`);
});
