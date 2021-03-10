import '../styles/LeftPane.scss';
import React from 'react';
import { BashPrompt } from './';

export class LeftPane extends React.Component {
  render(): JSX.Element {
    return (
      <div className='left content'>
        <p className='header'>
          <span className='red'>&#11044;</span>&nbsp;
          <span className='lightorange'>&#11044;</span>&nbsp;
          <span className='green'>&#11044;</span>
        </p>
        <BashPrompt cwd='~/code/ja.kob.codes' />
      </div>
    );
  }

  resize = (): void => this.forceUpdate();

  componentDidMount(): void {
    window.addEventListener('resize', this.resize);
  }
}
