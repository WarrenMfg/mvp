import React from 'react';
import { jsx } from '@emotion/core';
import CSS from '../CSS/TabsCSS.js';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(e) {
    this.props.handleChangeTab(e.target.innerText);
  }

  render() {
    return (
      <div css={CSS.container} onClick={this.handleChangeTab}>

        <div css={this.props.activeTab === 'Meow' ?
          CSS.meowContainerActive :
          CSS.meowContainer
        }>
          <p css={CSS.meow}>Meow</p>
        </div>

        <div css={this.props.activeTab === 'Pep' ?
          CSS.pepContainerActive :
          CSS.pepContainer
        }>
          <p css={CSS.pep}>Pep</p>
        </div>
      </div>
    );
  }
}

export default Tabs;