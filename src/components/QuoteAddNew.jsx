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
          quote: this.state.quote.trim(),
          student: this.state.student.trim(),
          cohort: this.state.cohort.trim(),
          dateAdded: new Date().toDateString(),
          dateModified: ''
        })
      })
        .then((newQuote) => newQuote.json())
        .then((newQuote) => this.props.updateQuotes(newQuote))
        .catch((err) => console.log('error at QuoteAddNew.jsx fetch', err));
    }

    this.setState({
      quote: '',
      student: '',
      cohort: ''
    });
  }

  render() {
    const textarea = {resize: 'none'};
    return (
      <form onSubmit={this.handleSubmit} css={CSS.form}>
        <label>Say something:
          <textarea
            id="quote"
            placeholder="Advice, quotes, etc..."
            autoFocus
            required
            style={ textarea }
            value={this.state.quote}
            onChange={this.handleChange}
          ></textarea>
        </label>

        <label>Student:
          <input
            type="text"
            id="student"
            placeholder="Your name"
            required
            value={this.state.student}
            onChange={this.handleChange}
          />
        </label>

        <label>Cohort:
          <input
            type="text"
            id="cohort"
            placeholder="HRR43"
            required
            value={this.state.cohort}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default QuoteAddNew;