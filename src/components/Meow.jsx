import React from 'react';
import { jsx } from '@emotion/core';
import Song from './Song.jsx';
import CSS from '../CSS/MeowCSS.js';


class Meow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div css={CSS.meowContainer}>
        <div css={CSS.headers}>
          <h2>Billboard Top 100</h2>
          <h3>Updated every Saturday</h3>
        </div>
        {this.props.top100.map((song, i) => <Song key={i} song={song} />)}
      </div>
    );
  }
}

export default Meow;