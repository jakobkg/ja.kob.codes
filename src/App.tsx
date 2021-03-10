import React from 'react';
import {LeftPane, RightPane} from './components';
import './styles/App.scss';

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className='smol-flexbox-grid'>
        <LeftPane />
        <RightPane />
      </div>
    )
  }
}
