import React from 'react';

class QuoteDisplayRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      quote: '',
      student: '',
      cohort: ''
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEditMode() {
    if (!this.state.editMode && !this.props.masterEditMode) {
      this.props.toggleMasterEditMode();

      this.setState({
        editMode: true,
        quote: this.props.quote.quote,
        student: this.props.quote.student,
        cohort: this.props.quote.cohort
      });
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

    if (this.state.quote && this.state.student && this.state.cohort) {
      const updatedQuote = {
        quote: this.state.quote.trim(),
        student: this.state.student.trim(),
        cohort: this.state.cohort.trim(),
        dateAdded: this.props.quote.dateAdded,
        dateModified: new Date().toDateString()
      };

      this.props.handleRandomPut([updatedQuote, this.props.quote._id]); // PUT

      this.setState({
        editMode: false,
        quote: '',
        student: '',
        cohort: ''
      });

      this.props.toggleMasterEditMode();
    }
  }

  handleDelete() {
    this.props.handleRandomDelete(this.props.quote);
    this.setState({ editMode: false });
    this.props.toggleMasterEditMode();
  }

  render() {
    if (this.props.quote && !this.state.editMode) {
      const { quote, student, cohort, dateAdded, dateModified } = this.props.quote;
      return (
        <div className="QuoteDisplayRandom" onClick={this.toggleEditMode}>
          <p>{quote}</p>
          <div>
            <p>Student: {student} <span>| Cohort: {cohort}</span></p>
            <p>Date added: {dateAdded} {dateModified && <span>| Date modified: {dateModified}</span>}</p>
          </div>
        </div>
      );

    } else if (this.props.quote && this.state.editMode) {
      const { quote, student, cohort, dateAdded, dateModified } = this.props.quote;
      const textarea = {resize: 'none'};

      return (
        <form onSubmit={this.handleSubmit}>
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
              id="edit-random-student"
              placeholder="Your name"
              required
              value={this.state.student}
              onChange={this.handleChange}
            />
          </label>

          <label>Cohort:
            <input
              type="text"
              id="edit-random-cohort"
              placeholder="HRR43"
              required
              value={this.state.cohort}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" value="Confirm">Confirm</button>
          <button type="button" value="Delete" onClick={this.handleDelete}>Delete</button>
        </form>
      );

    } else {
      return null;
    }
  }
}

export default QuoteDisplayRandom;