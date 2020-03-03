import React from 'react';
import { jsx } from '@emotion/core';
import CSS from '../CSS/QuoteAddNewCSS.js';

class QuoteAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      student: '',
      cohort: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.quote && this.state.student && this.state.cohort) {
      fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quote: DOMPurify.sanitize(this.state.quote.trim()),
          student: DOMPurify.sanitize(this.state.student.trim()),
          cohort: DOMPurify.sanitize(this.state.cohort.trim()),
          dateAdded: new Date().toDateString(),
          dateModified: ''
        })
      })
        .then((newQuote) => newQuote.json())
        .then((newQuote) => {
          this.props.updateQuotes(newQuote);

          this.setState({
            quote: '',
            student: '',
            cohort: ''
          });

          document.getElementById('quote').focus();
        })
        .catch((err) => console.log('error at QuoteAddNew.jsx fetch', err));
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} css={CSS.form}>
        <div css={CSS.divTop}>
          <p css={CSS.saySomething}>Say something: </p>
          <textarea
            id="quote"
            placeholder="Advice, quotes, etc..."
            autoFocus
            required
            css={CSS.textarea}
            value={this.state.quote}
            onChange={this.handleChange}
          ></textarea>
        </div>

        <div css={CSS.divBottom}>
          <p css={CSS.student}>Student: </p>
          <input
            type="text"
            id="student"
            placeholder="Your name"
            required
            css={CSS.studentInput}
            value={this.state.student}
            onChange={this.handleChange}
          />

          <p css={CSS.cohort}>Cohort: </p>
          <input
            type="text"
            id="cohort"
            placeholder="HRR43"
            required
            css={CSS.cohortInput}
            value={this.state.cohort}
            onChange={this.handleChange}
          />

          <button
            type="submit"
            value="Submit"
            css={CSS.button}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default QuoteAddNew;