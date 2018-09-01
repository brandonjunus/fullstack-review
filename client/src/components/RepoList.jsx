import React from 'react';
const RepoList = (props) => (

  <ol className="container py-5">
  <h4>There are {props.repos.length} repos.</h4>
    {props.repos.map((repo) =>
    <div className="card border-dark mb-3">
      <div className="card-header">{repo.id}</div>
        <div className="card-body text-dark">
          <h5 className="card-title">{repo.name}</h5>
          <p className="card-text">Created At: {repo.created_at}</p>
          <p className="card-text">Updated At: {repo.updated_at}</p>
          <a href={repo.html_url} className="card-text">{repo.html_url}</a>
      </div>
    </div>)}
  </ol>

)

export default RepoList;