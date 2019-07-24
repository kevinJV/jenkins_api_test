const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.send('Hello there; General Kenobi')
});

app.post('/', (req, res)=>{
    const { num1, num2 } = req.body;
    const sum  = num1 + num2;
    console.log(sum)
    res.send('suma: ' + sum)
})

app.listen(process.env.PORT || 3000);
console.log("Server started")

module.exports = app;