import React from 'react';
import { jsx } from '@emotion/core';
import CSS from '../CSS/SongCSS.js';


class Song extends React.Component {
  constructor(props) {
    super(props);

    this.link = this.link.bind(this);
  }

  link() {
    return `https://www.youtube.com/results?search_query=${this.props.song.title.split(' ').join('+')}+${this.props.song.artist.split(' ').join('+')}`;
  }

  render() {
    const { cover, rank, title, artist } = this.props.song;
    return (
      <a href={this.link()} target="_blank" css={CSS.link}>
        <div css={CSS.containerDiv}>
          <img src={cover} css={CSS.image} />
          <p css={CSS.rank}>#{rank}</p>
          <div css={CSS.titleContainer}>
            <p css={CSS.title}>"{title}"</p>
          </div>
          <div css={CSS.artistContainer}>
            <p css={CSS.artist}>{artist}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Song;