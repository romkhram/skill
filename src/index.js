import express from 'express'

const app = express();

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send(
//   	'hello world'
//   	);
// });


app.get('/task2A', function(req, res) {
  const sum = req.query.a*1 || 0 + req.query.b*1 || 0;
  res.send(sum.toString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
