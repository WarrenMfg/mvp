import React from 'react';

class QuoteDisplayRandom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.quote) {
      const { quote, author, student, cohort, dateAdded, dateModified } = this.props.quote;
      return (
        <div className="QuoteDisplayRandom">
          <p>{quote}</p>
          <div>
            <p>Author: {author}</p>
            <p>Student: {student} <span>| Cohort: {cohort}</span></p>
            <p>Date added: {dateAdded} {dateModified && <span>| Date modified: {dateModified}</span>}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default QuoteDisplayRandom;