var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.get('/', function(req, res){
    res.render('index');
})

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT)
});