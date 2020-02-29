import React from 'react';

class QuoteAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      contributor: ''
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
    if (this.state.quote && this.state.author && this.state.contributor) {
      fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quote: this.state.quote,
          author: this.state.author,
          contributor: this.state.contributor,
          dateAdded: new Date().toDateString(),
          dateModified: ''
        })
      });
    }

    this.setState({
      quote: '',
      author: '',
      contributor: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add a quote
          <input
            type="text"
            id="quote"
            value={this.state.quote}
            onChange={this.handleChange}
          />
        </label>

        <label>Author
          <input
            type="text"
            id="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </label>

        <label>Submitted by
          <input
            type="text"
            id="contributor"
            value={this.state.contributor}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default QuoteAddNew;