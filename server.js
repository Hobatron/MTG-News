const express = require('express');
const exphbs = require('express-handlebars');
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

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

app.get('/', (req, res) => {
    // axios.get('https://magic.wizards.com/en/articles/archive')
    //     .then((response) => {
    //         const $ = cheerio.load(response.data);
    //         let results = [];
    //         $('div .article-item-extended').each(function (i, element) {
    //             let result = {}
    //             result.catagory = $(this).find('h4 span').text();
    //             result.title = $(this).find('h3').text();
    //             result.author = $(this).find('.author').text();
    //             result.description = $(this).find('.description').text().replace(/\n/g, '');
    //             result.img = $(this).find('.image').attr('style');
    //             result.postDate = $(this).find('.date').text().trim();
    //             result.link = 'https://magic.wizards.com' + $(this).children("a").attr("href");
    //             results.push(result);
    //         });
    //         fs.writeFile('temp.txt', JSON.stringify(results), (err, resp) => {
    //             if (err) throw err;
    //             res.send('success');
    //         });
    //         res.render('home', {
    //             articles: results
    //         });
    //     })
    //     .catch((err) => {
    //         if (err) throw err;
    //         return;
    //     });
    res.render('home', {
        articles: results
    });

});

app.listen(PORT, () => {
    console.log('Site hosted on: http://localhost:' + PORT);
});

const results = [{
        "id_": 1,
        "catagory": "Feature",
        "title": "War of the Spark Mechanics",
        "author": "by Matt Tabak",
        "description": "Matt reveals the new and returning mechanics you'll see as Nicol Bolas executes his endgame in War of the Spark!",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/UABkA31Czn_icon.jpg);",
        "postDate": "March 31 2019",
        "link": "https://magic.wizards.com/en/articles/archive/feature/war-spark-mechanics-2019-03-31"
    },
    {
        "id_": 2,
        "catagory": "Feature",
        "title": "War of the Spark Preview Season Will Tell a Story",
        "author": "by Blake Rasmussen",
        "description": "The preview season for War of the Spark will showcase the story front and center as we reach the dramatic conclusion.",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/BrJxEJBxrh_icon.jpg);",
        "postDate": "March 27 2019",
        "link": "https://magic.wizards.com/en/articles/archive/feature/war-spark-preview-season-will-tell-story-2019-03-27"
    },
    {
        "id_": 3,
        "catagory": "Wallpaper",
        "title": "Spawn of Mayhem",
        "author": "by Victor Adame Minguez",
        "description": "Bring digital versions of Magic's best artwork home with quality, high-resolution images uploaded weekly to use as the wallpaper or background for your computer, tablet, or phone.",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/Lr3GDZY2oH_icon.jpg);",
        "postDate": "March 27 2019",
        "link": "https://magic.wizards.com/en/articles/archive/wallpaper/spawn-mayhem-2019-03-27"
    },
    {
        "id_": 4,
        "catagory": "Magic Online",
        "title": "Magic Online Announcements, March 26, 2019",
        "author": "by Wizards of the Coast",
        "description": "Every Tuesday, we round up all the biggest Magic Online news for the Weekly Announcements Blog.",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/MTGO20181105_News_icon.jpg);",
        "postDate": "March 26 2019",
        "link": "https://magic.wizards.com/en/articles/archive/magic-online/magic-online-announcements-march-2019-03-26"
    },
    {
        "id_": 5,
        "catagory": "Competitive Gaming",
        "title": "Duo Standard and the Mythic Invitational",
        "author": "by Marshall Sutcliffe",
        "description": "How will players prepare for the all-new Duo Standard format? Marshall explores what he expects to see at Magic's biggest tournament ever!",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/CG20190326_icon.jpg);",
        "postDate": "March 26 2019",
        "link": "https://magic.wizards.com/en/articles/archive/competitive-gaming/duo-standard-and-mythic-invitational-2019-03-26"
    },
    {
        "id_": 6,
        "catagory": "Making Magic",
        "title": "Storm Scale: Kaladesh and Amonkhet",
        "author": "by Mark Rosewater",
        "description": "Mark uses his Storm Scale to rate the mechanics from Kaladesh and Amonkhet blocks to see which stand a good chance of returning.",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/MM20190325_icon.jpg);",
        "postDate": "March 25 2019",
        "link": "https://magic.wizards.com/en/articles/archive/making-magic/storm-scale-kaladesh-and-amonkhet-2019-03-25"
    },
    {
        "id_": 7,
        "catagory": "Competitive Gaming",
        "title": "Mythic Invitational and PAX East Survival Guide",
        "author": "by Wizards of the Coast",
        "description": "Get ready for the biggest Magic: The Gathering event of all time—the Mythic Invitational at PAX East!",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/f6QSVmJxh7_icon.jpg);",
        "postDate": "March 25 2019",
        "link": "https://magic.wizards.com/en/articles/archive/competitive-gaming/mythic-invitational-and-pax-east-survival-guide-2019-03-25"
    },
    {
        "id_": 8,
        "catagory": "Competitive Gaming",
        "title": "Meet Competitive Gaming Leaders: Ben and Bear",
        "author": "by Chris Gleeson",
        "description": "Ben Drago and Bear Schmiedicker are two of the newest faces on our Esports team, here to ensure Magic builds upon its storied history.",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/CG20190321_icon_0.jpg);",
        "postDate": "March 21 2019",
        "link": "https://magic.wizards.com/en/articles/archive/competitive-gaming/meet-competitive-gaming-leaders-ben-and-bear-2019-03-21"
    },
    {
        "id_": 9,
        "catagory": "Magic Digital",
        "title": "MTG Arena: State of the Beta – March 2019",
        "author": "by Chris Clay",
        "description": "This month's shiny new MTG Arena updates will have you battling it out in style—take a look at what's in store!",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/MTGA_News.jpg);",
        "postDate": "March 20 2019",
        "link": "https://magic.wizards.com/en/articles/archive/magic-digital/mtg-arena-state-beta-march-2019-03-20"
    },
    {
        "id_": 10,
        "catagory": "Magic Online",
        "title": "Magic Online Announcements, March 19, 2019",
        "author": "by Wizards of the Coast",
        "description": "Every Tuesday, we round up all the biggest Magic Online news for the Weekly Announcements Blog.",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/MTGO20181105_News_icon.jpg);",
        "postDate": "March 19 2019",
        "link": "https://magic.wizards.com/en/articles/archive/magic-online/magic-online-announcements-march-2019-03-19"
    }
];