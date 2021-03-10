import React from 'react';

export class BashPrompt extends React.Component<{ cwd: string }> {
  render(): JSX.Element {
    return (
      <p>
        ┌━ <span className='green'>jakob</span> in
        <span className='blue'> {this.props.cwd}</span>
        {(this.props.cwd.match(/\//g) || []).length > 1 && (
          <span className='lightorange'> ‹main ✓›</span>
        )}
        <br />
        └›aeiou
      </p>
    );
  }
}
