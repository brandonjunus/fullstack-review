import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
    console.log(this.state)
  }

  // ended up not using this function.. not sure if this was intended. 
  // i used the actual search function passed down from parent
  
  // search() {
    // console.log("props", this.props)
    // this.props.onSearch(this.state.term);
  // }

  render() 
  {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={(e) => this.onChange(e)}/>       
      <button onClick={() => this.props.onSearch(this.state.term)}> Add Repos </button>
    </div>) 
  }
}

export default Search;