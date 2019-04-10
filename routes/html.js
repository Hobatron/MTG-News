const axios = require('axios');
const db = require("../models");
const mongoose = require("mongoose");
const cheerio = require('cheerio');

module.exports = (function () {
    'use strict';
    mongoose.connect('mongodb://localhost/mtg-news', {
        useNewUrlParser: true
    });
    var app = require('express').Router();

    function sendRes(res) {
        db.Article.find().sort({
                postDate: -1
            })
            .then((results) => {
                res.render('home', {
                    articles: results
                });
            });
    };
    app.get('/test', function (req, res) {
        axios.get('https://magic.wizards.com/en/articles/archive')
            .then((response) => {
                const $ = cheerio.load(response.data);
                let results = [];
                $('div .article-item-extended').each(function (i, element) {
                    let result = {}
                    result.catagory = $(this).find('h4 span').text();
                    result.title = $(this).find('h3').text();
                    result.author = $(this).find('.author').text();
                    result.description = $(this).find('.description').text().replace(/\n/g, '');
                    result.img = $(this).find('.image').attr('style');
                    result.postDate = $(this).find('.date').text().trim();
                    result.link = 'https://magic.wizards.com' + $(this).children("a").attr("href");
                    results.push(result);
                });
                for (var i = 0; i < results.length; i++) {
                    db.Article.create(results[i])
                        .catch(err => {

                        });
                    if (i == results.length - 1) {
                        setTimeout(() => sendRes(res), 500);
                    };
                };

            })
            .catch((err) => {
                if (err) throw err;
                return;
            });
    });

    return app;
})();