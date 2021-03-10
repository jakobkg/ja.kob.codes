import '../styles/LeftPane.scss';
import React from 'react';
import { RepoList } from './RepoList';

export class LeftPane extends React.Component {
  render(): JSX.Element {
    return (
      <div className='left content'>
          <p className='header'><span className='red'>&#11044;</span> <span className='lightorange'>&#11044;</span> <span className='green'>&#11044;</span></p>
          <h2 className='lightorange'>repoliste</h2>
          <RepoList username='jakobkg' />
      </div>
    )
  }

  resize = (): void => this.forceUpdate();

  componentDidMount(): void {
    window.addEventListener('resize', this.resize);
  }
}
