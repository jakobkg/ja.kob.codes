import React from 'react';
import { GetRepos } from '../helpers/GetRepos';
import { RepoListResponseType } from "../types";

export class RepoList extends React.Component<{ username: string }, {repoURLs: string[]}>  {
  constructor(props: {username: string}) {
    super(props);
    this.state = {repoURLs: []};
  }

  componentDidMount(): void {
    GetRepos(this.props.username).then((res: RepoListResponseType) => {
      res.data.forEach((repo) => {
        this.setState({ repoURLs: [...this.state.repoURLs, repo.name]});
      })
    })
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.repoURLs.map((reponame) => {
          const repolink = `https://github.com/${this.props.username}/${reponame}`;
          return(
            <>
              <a href={repolink}>{reponame}</a><br />
            </>
          )
        })}
      </>
    );
  }
}
