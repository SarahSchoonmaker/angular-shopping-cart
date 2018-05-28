/* Minimal Node Server for development */
var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname + '/../dist')));

app.get('/api', (req,res) => {
    console.log('get request for route /api')
})

app.get('/api/:id', (req,res) => {
    console.log(req.params.id)
})

app.listen(process.env.POST || 3000, function() {
    console.log('Listening on PORT: 3000')
})
