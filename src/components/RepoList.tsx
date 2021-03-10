import React from 'react';
import { Repo } from '../interfaces/Repo';
import { GithubLink } from '../components';
import { GetRepos } from '../helpers/GetRepos';

export class RepoList extends React.Component<{username?: string}, { repos: Repo[] }>  {
  constructor(props: any) {
    super(props);
    this.state = { repos: [] }

    this.setRepos = this.setRepos.bind(this);
  }

  setRepos(repos: Repo[]) {
    this.setState({ repos: repos });
  }

  async componentDidMount() {
    this.setRepos(await GetRepos(this.props.username ? this.props.username : 'jakobkg'));
  }

  render() {
    return (
      <>
        { this.state.repos.map(repo => (
          <>
            <GithubLink repoName={repo.name} /><br />
          </>
          )
        )}
      </>
    );
  }
}
