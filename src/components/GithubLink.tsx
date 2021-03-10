import React from 'react';

export class GithubLink extends React.Component<{ repoName: string }> {
  render(): JSX.Element {
    const linkUrl = `https://github.com/jakobkg/${this.props.repoName}`;
    return (
      <a href={linkUrl} target='_blank' rel='noreferrer'>
        {this.props.repoName}
      </a>
    );
  }
}
