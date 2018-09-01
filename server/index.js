const express = require('express');
let bodyParser = require('body-parser');
let githubSearch = require('../helpers/github.js')
let db = require('../database/index.js')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  githubSearch.getReposByUsername(req.body.term, reposData => {
    for (let i = 0; i < reposData.length; i++){
      db.save(reposData[i]);
    }
    res.status(201)
    .end();
  });
});

app.get('/repos', (req, res) => {
  db.getData((repos) =>{
    // console.log("We got our repos out form the DB:", repos)
    res.status(200).send(repos)
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
