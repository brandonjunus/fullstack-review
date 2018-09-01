const request = require('request');
const config = require('../config.js');


let getReposByUsername = (searchTerm, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  let options = {
    url: `https://api.github.com/users/${searchTerm}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, (err, data) => {
    if (err) throw err;
    let myRepos = JSON.parse(data.body);
    // console.log('got some data back from GITHUB API: ', JSON.parse(data.body));
    // console.log('Here is the first repo you got back from your search', myRepos[0].id);

    callback(myRepos);
  })
}

module.exports.getReposByUsername = getReposByUsername;