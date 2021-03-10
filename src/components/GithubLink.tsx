import React from 'react';

export class GithubLink extends React.Component<{repoName: string}>  {
  constructor(props: any) {
    super(props);
  }

  render() {
    const linkUrl = `https://github.com/jakobkg/${this.props.repoName}`;
    return (
      <a href={linkUrl} target="_blank">
        {this.props.repoName}
      </a>
    );
  }
}
