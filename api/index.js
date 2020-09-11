const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParser.json()); 

//trivial random integer generator
function randint(min = 2, max = 94906264){
  return Math.floor(Math.random() * (max - min)) + min;
}

//O(n) complexity prime factors calculator
function primeFactors(n){
  var factors = [], 
      divisor = 2;

  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

// dummy summation
const sigma = (accumulator, currentValue) => accumulator + currentValue;

app.get('/hello', (req, res) => {
  res.send('Hello World, from express');
});

app.get('/run/:times', (req, res) => {
  let times = req.params.times;
  let the_thing_we_are_looking_for = 0;
  let result = 0;
  for(let i = times; i > 0; i--){
    result = randint()*randint();
  }
  let factors = primeFactors(result)
  the_thing_we_are_looking_for = 
    factors.length > 1 ? factors.reduce(sigma) : result 
  if (the_thing_we_are_looking_for == result) console.log(result)
  res.send("This is: " + the_thing_we_are_looking_for)
});

app.post('/login', (req, res) => {
  let username = req.body.username,
      password = req.body.password;
  if(username === "foo" && password === "bar"){
    res.send("nice");
  }else{
    res.send("bad >:(");
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

