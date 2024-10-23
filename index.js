const express = require('express');
const fetch = require('node-fetch');
const erBase = require("eventregistry");



const apiKey = "3e55a217-7031-475b-9237-f61c2d9fbfe9";
const keywords = ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks", "Natural Language Processing"];


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index', {"title":"Artificial Intelligence", "pageName":"index"});
});

app.get('/cnn', (req, res) => {
  res.render('cnn', {"title":"Convolutional Neural Networks","pageName":"cnn"});
});

app.get('/rnn', (req, res) => {
  res.render('rnn', {"title":"Recurrent Neural Networks", "pageName":"rnn"});
});

app.get('/transformer', (req, res) => {
  res.render('transformer', {"title":"Transformers", "pageName":"transformer"});
});

app.get('/news', (req, res) => {
  class news {
    constructor(title, url, image) {
      this.title = title;
      this.url = url;
      this.image = image;
    }
  }
  
  function processResults(newsList) {
    console.log(newsList);
    let newsString = JSON.stringify(newsList);
    res.render('news', {"title":"News", "pageName":"news", "array":newsString});
  }

  (async () => {
    let newsList = [];
    const er = new erBase.EventRegistry({apiKey: apiKey});
    const articles = new erBase.QueryArticlesIter(er, {keywords: keywords, sortBy: "date", count: 2, lang: "eng", maxItems: 6});
    for await (const article of articles) {
      const newItem = new news(article.title, article.url, article.image);
      if(article.title == null || article.url == null || article.image == null) {
        console.log("article had null fields");
      } else {
        newsList.push(newItem);
        console.log(newItem);
      }
    }
    processResults(newsList);
  })();
});

app.listen(3000, () => {
  console.log('server started');
});
