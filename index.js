import express from "express";

const app = express();

const roles = [{
    ADMIN : "admin",
    BASIC : "basic"
}];

const m1 = (req, res, next) => {
  console.log(1);
  next(); // Pass control to the next middleware
};

const m2 = (req, res, next) => {
  console.log(2);
  next(); // Pass control to the next middleware
};

app.get('/',  [m1, m2], (req, res) => {
  console.log("Hiiiii");
  res.send("Hello World!");
});

app.listen(3000, () => console.log('Server listening on port 3000'));


const data = [
    {"Id":1, "Name":"Mogesh","Age":21},
    {"Id":2, "Name":"Arun","Age":22},
    {"Id":3, "Name":"Karthik","Age":25}
];

app.get('/list', (req, res) => {
    const role = req.headers.role;
    console.log(role);
    if (roles.includes(role)) {
        console.log("in");
        res.send(data); 
    } else {
        res.status(401).send("You don't have access");
    }
    console.log("out");
});


app.get('/:rno', (req, res) => {
    const rno = req.params.rno; 
    res.send(data[rno-1]);
});

app.listen(3001, (err) => {
    if (err)
        throw err;
    else
        console.log("Server running at http://127.0.0.1:3001");
});
