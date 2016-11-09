import express from 'express'

const app = express();

//respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send(
//   	'hello world'
//   	);
// });

app.get('/dz', function (req, res) {
	const sname = req.query.fullname;
	const arrname = sname.split(' ');
	const lname = arrname.length - 1;
if (lname > 2, lname < 0){
res.send('Invalid fullname');
}else if(lname == 2){	
  res.send(arrname[lname] + " " + arrname[lname - 1].substr(0, 1) + ". " + arrname[lname - 2].substr(0, 1) + ".");
}else if(lname == 1){	
  res.send(arrname[lname] + " " + arrname[lname - 1].substr(0, 1) + ".");
}else if(lname == 0){	
  res.send(arrname[lname]);
}
});


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
