import React from 'react';
import QuoteAddNew from './QuoteAddNew.jsx';
import QuoteDisplayRandom from './QuoteDisplayRandom.jsx';
import QuotesContainer from './QuotesContainer.jsx';

class Pep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <QuoteAddNew updateQuotes={this.props.updateQuotes} />
        <QuoteDisplayRandom
          quote={this.props.quote}
          handleRandomPut={this.props.handleRandomPut}
          handleRandomDelete={this.props.handleRandomDelete}
          masterEditMode={this.props.masterEditMode}
          toggleMasterEditMode={this.props.toggleMasterEditMode}
        />
        <QuotesContainer
          quotes={this.props.quotes}
          handleQuotePut={this.props.handleQuotePut}
          handleQuoteDelete={this.props.handleQuoteDelete}
          masterEditMode={this.props.masterEditMode}
          toggleMasterEditMode={this.props.toggleMasterEditMode}
        />
      </div>
    );
  }
}

export default Pep;