import React from 'react';
import QuoteDisplayRandom from './QuoteDisplayRandom.jsx';
import QuoteAddNew from './QuoteAddNew.jsx';
import QuotesContainer from './QuotesContainer.jsx';
import { jsx } from '@emotion/core';
import CSS from '../CSS/AppCSS.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      random: undefined,
      masterEditMode: false
    };

    this.updateQuotes = this.updateQuotes.bind(this);
    this.handleRandomPut = this.handleRandomPut.bind(this);
    this.handleRandomDelete = this.handleRandomDelete.bind(this);
    this.handleQuoteDelete = this.handleQuoteDelete.bind(this);
    this.handleQuotePut = this.handleQuotePut.bind(this);
    this.toggleMasterEditMode = this.toggleMasterEditMode.bind(this);
  }

  componentDidMount() {
    fetch('/api/quotes')
      .then((quotes) => quotes.json())
      .then((quotes) => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        this.setState({ quotes: quotes.reverse(), random });
      })
      .catch((err) => console.log('error at componentDidMount fetch', err));
  }

  toggleMasterEditMode() {
    this.setState((prevState) => ({ masterEditMode: !prevState.masterEditMode }));
  }

  updateQuotes(newQuote) {
    if (this.state.random) {
      this.setState((prevState) => {
        prevState.quotes.push(newQuote);
        return {
          quotes: prevState.quotes.reverse()
        };
      });

    } else {
      this.setState({ quotes: [newQuote], random: newQuote });
    }


  }

  handleRandomPut(updatedQuote) {
    fetch('/api/quotes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedQuote)
    })
      .then((dbUpdatedQuote) => dbUpdatedQuote.json())
      .then((updatedRandom) => this.setState({random: updatedRandom.value}))
      .catch((err) => console.log('error in App.jsx handlePut', err));
  }

  handleQuotePut(updatedQuote) {
    fetch('/api/quotes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedQuote)
    })
      .then((dbUpdatedQuote) => dbUpdatedQuote.json())
      .then((updatedQuote) => {

        this.setState((prevState) => {
          let index = prevState.quotes.findIndex((quote) => quote._id === updatedQuote.value._id);
          prevState.quotes[index] = updatedQuote.value;

          if (prevState.random._id === updatedQuote.value._id) {
            return { quotes: prevState.quotes, random: updatedQuote.value };
          } else {
            return { quotes: prevState.quotes };
          }
        });
      })
      .catch((err) => console.log('error in App.jsx handlePut', err));
  }

  handleRandomDelete(oldRandomQuote) {
    fetch('/api/quotes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: oldRandomQuote._id})
    })
      .then((confirmation) => confirmation.json())
      .then(() => {
        const randomIndex = Math.floor(Math.random() * (this.state.quotes.length - 1));

        this.setState((prevState) => {
          const deleteIndex = prevState.quotes.findIndex((quote) => quote._id === oldRandomQuote._id);
          prevState.quotes.splice(deleteIndex, 1);

          return {
            quotes: prevState.quotes,
            random: prevState.quotes[randomIndex]
          };
        });
      })
      .catch(() => console.log('error in App.jsx handleRandomDelete', err));
  }

  handleQuoteDelete(oldQuote) {
    fetch('/api/quotes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: oldQuote._id})
    })
      .then((confirmation) => confirmation.json())
      .then(() => {

        if (this.state.random._id === oldQuote._id) {
          const randomIndex = Math.floor(Math.random() * (this.state.quotes.length - 1));

          this.setState((prevState) => {
            const deleteIndex = prevState.quotes.findIndex((quote) => quote._id === oldQuote._id);
            prevState.quotes.splice(deleteIndex, 1);

            return {
              quotes: prevState.quotes,
              random: prevState.quotes[randomIndex]
            };
          });
        } else {
          this.setState((prevState) => {
            const deleteIndex = prevState.quotes.findIndex((quote) => quote._id === oldQuote._id);
            prevState.quotes.splice(deleteIndex, 1);

            return {
              quotes: prevState.quotes
            };
          });
        }
      })
      .catch(() => console.log('error in App.jsx handleRandomDelete', err));
  }

  render() {
    return (
      <div css={CSS.div}>
        {/* <Spotify /> */}
        <QuoteAddNew updateQuotes={this.updateQuotes} />
        <QuoteDisplayRandom
          quote={this.state.random}
          handleRandomPut={this.handleRandomPut}
          handleRandomDelete={this.handleRandomDelete}
          masterEditMode={this.state.masterEditMode}
          toggleMasterEditMode={this.toggleMasterEditMode}
        />
        <QuotesContainer
          quotes={this.state.quotes}
          handleQuotePut={this.handleQuotePut}
          handleQuoteDelete={this.handleQuoteDelete}
          masterEditMode={this.state.masterEditMode}
          toggleMasterEditMode={this.toggleMasterEditMode}
        />
      </div>

    );
  }
}

export default App;