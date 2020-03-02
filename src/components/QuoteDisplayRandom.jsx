import React from 'react';
import { jsx } from '@emotion/core';
import CSS from '../CSS/QuoteDisplayRandomCSS.js';

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
        <div onClick={this.toggleEditMode} css={CSS.displayDiv}>
          <p css={CSS.quote}>{quote}</p>
          <div css={CSS.infoDiv}>
            <p><span>Student: </span>{student}</p>
            <p><span>Cohort: </span>{cohort}</p>
            <p><span>Date added: </span>{dateAdded}</p>
            {dateModified && <p><span>Date modified: </span>{dateModified}</p>}
          </div>
        </div>
      );

    } else if (this.props.quote && this.state.editMode) {
      const { quote, student, cohort, dateAdded, dateModified } = this.props.quote;

      return (
        <form onSubmit={this.handleSubmit} css={CSS.form}>

          <div css={CSS.divTop}>
            <p css={CSS.saySomething}>Edit something: </p>
            <textarea
              id="edit-random-quote"
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
              id="edit-random-student"
              placeholder="Your name"
              required
              css={CSS.studentInput}
              value={this.state.student}
              onChange={this.handleChange}
            />

            <p css={CSS.cohort}>Cohort: </p>
            <input
              type="text"
              id="edit-random-cohort"
              placeholder="HRR43"
              required
              css={CSS.cohortInput}
              value={this.state.cohort}
              onChange={this.handleChange}
            />

            <button
              type="submit"
              value="Confirm"
              css={CSS.button}
            >
              Confirm
            </button>
            <button
              type="button"
              value="Delete"
              onClick={this.handleDelete}
              css={CSS.button}
            >
              Delete
            </button>
          </div>

        </form>
      );

    } else {
      return null;
    }
  }
}

export default QuoteDisplayRandom;