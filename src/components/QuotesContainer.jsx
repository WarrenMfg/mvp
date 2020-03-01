import React from 'react';
import Quote from './Quote.jsx';

class QuotesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.quotes.map((quote, i) =>
          <Quote
            key={i}
            quote={quote}
            handleQuotePut={this.props.handleQuotePut}
            masterEditMode={this.props.masterEditMode}
            toggleMasterEditMode={this.props.toggleMasterEditMode}
          />
        )}
      </div>
    );
  }
}

export default QuotesContainer;