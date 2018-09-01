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

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:1128/repos",
      dataType: "JSON",
    }).done(
      data => {
        console.log(data)
        this.setState({
          repos: data 
        })
      }
    )
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:1128/repos",
      dataType: "JSON",
      data: {term: term}
    }).done(console.log("got data back!"))
    // .fail(console.log(failed))
  }

  render () {
    return (
      <div className="container">
        <h1>Github Fetcher</h1>
        <Search onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));