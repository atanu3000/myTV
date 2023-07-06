const express = require('express');
const mongoose = require('mongoose');

const Feedback = require("./models/feedback");
const UserData = require("./models/signup");

// initiating express
const app = express();

// link to database
const dbURL = "mongodb+srv://atanupaul03:UlzBd1x6xOTUdirq@cluster0.jinklwv.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(3000, () => {
      console.log("Connection to the Database was established!");
      console.log("server running at http://localhost:3000");
    })
  )
  .catch((error) => console.log(error));



// Middlewares
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/model'));

// const fetch = require('node-fetch');

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
  res.render("home", { title: "Home", data: dataSet });
});

app.get('/view_more/:type', (req, res) => {
  let type = req.params.type;
  res.render("view_more", { title: type, heading: type.split('_').join(' ') });
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

app.post('/submitFeedback', (req, res) => {
  let feedback = new Feedback({
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });
  feedback
    .save()
    .then(() => res.send("success"))
    .catch((error) => res.json({ msg: error.feedback }));
});

app.get('/deleteMsg', (req, res) => {
  Feedback.deleteMany()
    .then(() => res.json({ msg: 'success' }))
    .catch((error) => res.json({ msg: error.feedback }));
})

app.get('/signup', (req, res) => {
  res.render("signup", { title: "Signup" });
});

app.post('/submitForm', (req, res) => {
  let signup = new UserData({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  signup
    .save()
    .then(() => res.redirect('/'))
    .catch(err => res.json({msg: err.message}));
});