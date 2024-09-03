import express from 'express';

let app  = express();

app.get("/hello", (req, res) => {
  res.send(`Hello, npx nodemon --watch ./src/server.ts --exec ts-node src/server.ts `);
});


app.listen(3000, function() {
    console.log(`Server started on http://localhost:3000`);
});

