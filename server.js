const express = require('express');
const exphbs = require('express-handlebars');
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 8080;

const app = express();
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use('/html', htmlRoutes);
app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost/mtg-news', {
	useNewUrlParser: true
});

app.listen(PORT, () => {
	console.log('Site hosted on: http://localhost:' + PORT);
});