
const express = require("express");

const app = express();

const port = 4040;

app.listen(port, () => {
        console.log("Server is listening on port: %s", port)
});


// with query params (optional, filtering, sorting, paginations)
app.get('/employee', (req, res) => {
        // console.log(req);
        
        // console.log(res);

        const emp_id = req.query.id;
        const emp_dept = req.query.dept;
        
        console.log(emp_id);
        console.log(emp_dept);

        console.log(req.query);  // Query 
        console.log(req.params); // Params 
        console.log(req.body);  // Request body 
        console.log(req.path);  // URL Path 

        const result_data = {
                name: "Mahboob Alam",
                dept: emp_dept,
                ID: 101,
        }

        if (emp_id) {
                res.send(result_data);
        } else {
                res.send("No emp_id found");
        }

        
});


// with path params (mandatory)
app.get('/employee/:id/:dept', (req, res) => {
        // console.log(req);
        
        // console.log(res);

        const emp_id = req.params.id;
        const emp_dept = req.params.dept;
        
        console.log(emp_id);
        console.log(emp_dept);

        console.log(req.query);  // Query 
        console.log(req.params); // Params 
        console.log(req.body);  // Request body 
        console.log(req.path);  // URL Path 

        const result_data = {
                name: "Mahboob Alam",
                dept: emp_dept,
                ID: 101,
        }

        if (emp_id) {
                res.send(result_data);
        } else {
                res.send("No emp_id found");
        }

        
});

// path params 
app.get('/employee/:id', (req, res) => {
        // console.log(req);
        
        // console.log(res);

        const emp_id = req.params.id;
        const emp_dept = req.query.dept;
        
        console.log(emp_id);
        console.log(emp_dept);

        console.log(req.query);  // Query 
        console.log(req.params); // Params 
        console.log(req.body);  // Request body 
        console.log(req.path);  // URL Path 

        const result_data = {
                name: "Mahboob Alam",
                dept: emp_dept,
                ID: emp_id,
        }

        if (emp_id) {
                res.send(result_data);
        } else {
                res.send("No emp_id found");
        }

        
});
