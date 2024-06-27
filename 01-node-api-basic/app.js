
const express = require("express");

const app = express();

const port = 4040;

app.listen(port, () => {
        console.log("Server is listening on port: %s", port)
});

app.get('/', (request, response) => {
        response.send("Hello there! Congratulations on your first NodeJS API!. Thanks man. It works!");
});

