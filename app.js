const express = require('express');
const app = express();

app.set("view engine", "ejs");
// app.use(express.static("public"));
// const path = require('path');
app.use(express.static(__dirname + '/public'));

const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/account/20080192';
const url = 'https://api.themoviedb.org/3/search/tv?api_key=846611ee4524dae289850750385dfbd8&query=mr.%20robot';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY2MTFlZTQ1MjRkYWUyODk4NTA3NTAzODVkZmJkOCIsInN1YiI6IjY0OWQyMTY0MDkxZTYyMDBhZDU0MzVhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbnsijabVc_LsfKydGe8oODDCKBb9yb5m4sNgqib8XQ'
  }
};

fetch(url, options)
  .then()
  .catch(err => console.error('error:' + err));

const dataSet = [
  {
    type: "latest_releases",
    head: "Latest Releases",
  },
  {
    type: "trending_movies",
    head: "Trending Movies",

  },
  {
    type: "popular_shows",
    head: "Popular Shows"
  },
];

app.get('/', (req, res) => {
  res.render("home", { title: "Home", data: dataSet});
});

app.get('/view_more/:type', (req, res) => {
  let type = req.params.type;
  res.render("view_more", { title: type, heading: type.split('_').join(' ')});
});

app.get('/library', (req, res) => {
  res.render("library", { title: "Library" });
})

app.get('/support', (req, res) => {
  res.render("support", { title: "Support" });
})

app.get('/setting', (req, res) => {
  res.render("setting", { title: "Setting" });
})

app.get('/feedback', (req, res) => {
  res.render("feedback", { title: "Feedback" });
})

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
})