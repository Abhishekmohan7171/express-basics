const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());

app.get('/',function(req,res){
  	res.sendFile(path.join(__dirname,'index.html'));
	//res.send('hello');
})

app.get('/about',function(req,res){
	res.send("About GET")
})

app.post('/about',function(req,res){
	let sum;
	//req.body.operation = "+";

	switch(req.body.operation){
		case "+":
			sum = req.body.num1 + req.body.num2;
			break;
		case "-":
			sum = req.body.num1 - req.body.num2;
			break;
		case "*":
			sum = req.body.num1 * req.body.num2;
			break;
		case "/":
			sum = req.body.num1 / req.body.num2;
			break;
	}
	// if(req.body.operation == "+"){
	// 	sum = req.body.num1 + req.body.num2;
	// }else if(req.body.operation == "-"){
	// 	sum = req.body.num1 - req.body.num2;
	// }else if(req.body.operation == "*"){
	// 	sreq.body.num1 - req.body.num2;
	// }else if(req.body.operation == "/"){
	// 	sum = req.body.num1 / req.body.num2;
	// }


	
    console.log(sum)
	res.send(`${sum}`);
})

app.get('/signup',(req,res)=>{
  
	res.send("sign up ");
})


app.listen(3000,() => console.log('Server Started'));
