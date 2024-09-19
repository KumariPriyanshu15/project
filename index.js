const express = require("express");
const app = express();

//app.get('/', function(req,res)
//{
    //res.send("Hi There");

//})
//app.get('/home', function(req,res)
//{
  //  res.send("Hi There from home block");

//})

//app.listen(3000);

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Invalid numbers');
    }
    const result = num1 + num2;
    res.send(` ${result}`);
});
app.get('/subtract', (req, res) =>{
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.send(' Invalid numbers');
    }
    const result = num1 - num2;
    res.send(`${result}`);
});
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Invalid numbers');
    }
    const result = num1 * num2;
    res.send(`${result}`);
});
app.get('/divide', (req, res) =>{
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.send(' Invalid numbers');
    }
    if (num2 === 0) {
        return res.send('Error');
    }
    const result = num1 / num2;
    res.send(`${result}`);
});

app.listen(3000);
    

