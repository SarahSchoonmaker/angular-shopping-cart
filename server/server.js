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

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on PORT: 3000')
})
