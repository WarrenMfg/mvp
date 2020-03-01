import React from 'react';

class QuoteAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
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
    // POST
    if (this.state.quote && this.state.author && this.state.student && this.state.cohort) {
      fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quote: this.state.quote.trim(),
          author: this.state.author.trim(),
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
      author: '',
      student: '',
      cohort: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Contribution:
          <input
            type="text"
            id="quote"
            value={this.state.quote}
            onChange={this.handleChange}
          />
        </label>

        <label>Author:
          <input
            type="text"
            id="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </label>

        <label>Student:
          <input
            type="text"
            id="student"
            value={this.state.student}
            onChange={this.handleChange}
          />
        </label>

        <label>Cohort:
          <input
            type="text"
            id="cohort"
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