const express = require('express');
const exphbs = require('express-handlebars');
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
var db = require("./models");

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

mongoose.connect('mongodb://localhost/mtg-news', {
	useNewUrlParser: true
});

app.get('/', (_, res) => {
	// axios.get('https://magic.wizards.com/en/articles/archive')
	// 	.then((response) => {
	// 		const $ = cheerio.load(response.data);
	// 		let results = [];
	// 		$('div .article-item-extended').each(function (i, element) {
	// 			let result = {}
	// 			result.catagory = $(this).find('h4 span').text();
	// 			result.title = $(this).find('h3').text();
	// 			result.author = $(this).find('.author').text();
	// 			result.description = $(this).find('.description').text().replace(/\n/g, '');
	// 			result.img = $(this).find('.image').attr('style');
	// 			result.postDate = $(this).find('.date').text().trim();
	// 			result.link = 'https://magic.wizards.com' + $(this).children("a").attr("href");
	// 			results.push(result);
	// 		});
	// 		for (var i = 0; i < results.length; i++) {
	// 			let willBreak = false;
	// 			db.Article.create(results[i])
	// 				.catch((err) => {
	// 					willBreak = true;
	// 				});
	// 			if (willBreak) {
	// 				break;
	// 			};
	// 		};
	// 		db.Article.find().sort({
	// 				postDate: -1
	//			})
	// 			.then((results) => {
	// 				res.render('home', {
	// 					articles: results
	// 				});
	// 			});
	// 	})
	// 	.catch((err) => {
	// 		if (err) throw err;
	// 		return;
	// 	});
	db.Article.find().sort({
			postDate: -1
		})
		.then((results) => {
			res.render('home', {
				articles: results
			});
		});


});

app.listen(PORT, () => {
	console.log('Site hosted on: http://localhost:' + PORT);
});