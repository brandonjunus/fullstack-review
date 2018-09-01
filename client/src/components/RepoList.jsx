import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ol>
      {props.repos.map((repo) =>
          <li>
            <div>Repo ID: {repo.id}</div>
            <div>Created At: {repo.created_at}</div>
            <div>Updated At: {repo.updated_at}</div>
            <a href={repo.html_url}>{repo.html_url}</a>
          </li>
        )}
    </ol>
  </div>
)

export default RepoList;