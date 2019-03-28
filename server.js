var express = require('express');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8080;

var app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(PORT, () => {
    console.log('Site hosted on: http://localhost:' + PORT);
});