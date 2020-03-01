import React from 'react';

class QuoteDisplayRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      quote: '',
      author: '',
      student: '',
      cohort: ''
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEditMode() {
    if (this.state.editMode === false) { // will be changed to true
      this.setState({
        editMode: true,
        quote: this.props.quote.quote,
        author: this.props.quote.author,
        student: this.props.quote.student,
        cohort: this.props.quote.cohort
      });
    } else {
      this.setState({ editMode: false }); // is this needed?
    }
  }

  handleChange(e) {
    const splitId = e.target.id.split('-')[2];
    this.setState({
      [splitId]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.quote && this.state.author && this.state.student && this.state.cohort) {
      const updatedQuote = {
        quote: this.state.quote.trim(),
        author: this.state.author.trim(),
        student: this.state.student.trim(),
        cohort: this.state.cohort.trim(),
        dateAdded: this.props.quote.dateAdded,
        dateModified: new Date().toDateString()
      };

      this.props.handleEditRandom([updatedQuote, this.props.quote._id]);

      this.setState({
        editMode: false,
        quote: '',
        author: '',
        student: '',
        cohort: ''
      });
    }
  }

  render() {
    if (this.props.quote && !this.state.editMode) {
      const { quote, author, student, cohort, dateAdded, dateModified } = this.props.quote;
      return (
        <div className="QuoteDisplayRandom" onClick={this.toggleEditMode}>
          <p>{quote}</p>
          <div>
            <p>Author: {author}</p>
            <p>Student: {student} <span>| Cohort: {cohort}</span></p>
            <p>Date added: {dateAdded} {dateModified && <span>| Date modified: {dateModified}</span>}</p>
          </div>
        </div>
      );

    } else if (this.props.quote && this.state.editMode) {
      const { _id, quote, author, student, cohort, dateAdded, dateModified } = this.props.quote;

      return (
        <form onSubmit={this.handleSubmit}>
          <label>Contribution:
            <input
              type="text"
              id="edit-random-quote"
              value={this.state.quote}
              onChange={this.handleChange}
            />
          </label>

          <label>Author:
            <input
              type="text"
              id="edit-random-author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>

          <label>Student:
            <input
              type="text"
              id="edit-random-student"
              value={this.state.student}
              onChange={this.handleChange}
            />
          </label>

          <label>Cohort:
            <input
              type="text"
              id="edit-random-cohort"
              value={this.state.cohort}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" value="Submit">Submit</button>
        </form>
      );

    } else {
      return null;
    }
  }
}

export default QuoteDisplayRandom;