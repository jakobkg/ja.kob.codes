import '../styles/LeftPane.scss';
import React from 'react';
import { RepoList } from './RepoList';
import SplitPane from 'react-split-pane';

export class LeftPane extends React.Component {
  render() {
    return (
      <>
        <div className='left header'>
          <p><span className='red'>&#11044;</span>&nbsp;&nbsp;<span className='lightorange'>&#11044;</span>&nbsp;&nbsp;<span className='green'>&#11044;</span></p> 
        </div>
        <div className='left content'>
          <h2 className='lightorange'>repoliste</h2>
          <RepoList />
        </div>
      </>
    )
  }

  resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
}
