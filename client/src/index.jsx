import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  // url: 'FILL ME IN',
  // headers: {
  //   'User-Agent': 'request',
  //   'Authorization': `token ${config.TOKEN}`
  // }



  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:1128/repos",
      dataType: "JSON",
      data: {term: term}
    }).done(data => console.log("got data back!", data))
    // .fail(console.log(failed))
  }

  render () {
    return (<div>
      <h1 onClick={() => this.search('hello')}>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));