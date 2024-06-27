
// start server: nodemon post_api 

const express = require("express");

const app = express();

const port = 4040;

// using proect wise middleware for data serialization  
app.use(express.json());

app.listen(port, () => {
        console.log("Server started on port: %s", port);
});

app.post("/signup", (req, res) => {


        // path params and query params can also be passed. 

        const expected_api_key = "304753045730230457";

        if (req.headers["api_key"] != expected_api_key) {
                console.log(req.header["api_key"]);
                console.log(req.headers);
                res.send("Error! API Key is incorrect!");
        } else {

                // destructing 
                const { name, age, email, location } = req.body;

                console.log(name, age, email, location);

                // Sanitize data 
                if (age < 18 || age > 80) {
                        res.send("Error! Age must be between 18 and 80!");
                }

                // DB call and save to DB 

                res.send("Signup Success!")
        }


});