import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { id, quote, author, student, cohort, dateAdded, dateModified } = this.props.quote;
    return (
      <div>
        <p className="Quote-quote">{quote}</p>
        <div>
          <p>Author: {author}</p>
          <p>Student: {student} <span>| Cohort: {cohort}</span></p>
          <p>Date added: {dateAdded} {dateModified && <span>| Date modified: {dateModified}</span>}</p>

        </div>
      </div>
    );
  }
}

export default Quote;