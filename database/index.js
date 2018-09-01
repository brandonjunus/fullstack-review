const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  html_url: String,
  created_at: String,
  updated_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userRepoObject) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  userRepoObjectId = userRepoObject.id;
  var userRepoObjectId = new Repo({
    id: userRepoObject.id,
    name: userRepoObject.name,
    html_url: userRepoObject.html_url,
    created_at: userRepoObject.created_at,
    updated_at: userRepoObject.updated_at
  });
  // userRepoObjectId.save((err) => {
  //   if (err) return (err);
  //   console.log("saved a new user's repo!")
  var query = {name: userRepoObject.name},
      update = userRepoObjectId,
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
  
  // Find the document
  Repo.findOneAndUpdate(query, update, options, (error, result) => {
      if (error) return;
      console.log("Updated the repo: ", result)
      // do something with the document
  });
  
}



getData = (callback) => {
  Repo.find( (err, repos) => {
    if (err) return console.error(err);
    console.log("we got our repos from the DB");
    callback(repos);
  });
}

// module.exports.save = save;
// module.exports.save = save;

module.exports = {
  save: save,
  getData: getData
}