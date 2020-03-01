import React from 'react';
import QuoteDisplayRandom from './QuoteDisplayRandom.jsx';
import QuoteAddNew from './QuoteAddNew.jsx';
import QuotesContainer from './QuotesContainer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      random: {},
      masterEditMode: false
    };

    this.updateQuotes = this.updateQuotes.bind(this);
    this.handleRandomPut = this.handleRandomPut.bind(this);
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
    this.setState((prevState) => {
      prevState.quotes.push(newQuote);
      return {
        quotes: prevState.quotes.reverse()
      };
    });
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

  render() {
    return (
      <div>
        {/* <Spotify /> */}
        <QuoteAddNew updateQuotes={this.updateQuotes} />
        <QuoteDisplayRandom
          quote={this.state.random}
          handleRandomPut={this.handleRandomPut}
          masterEditMode={this.state.masterEditMode}
          toggleMasterEditMode={this.toggleMasterEditMode}
        />
        <QuotesContainer
          quotes={this.state.quotes}
          handleQuotePut={this.handleQuotePut}
          masterEditMode={this.state.masterEditMode}
          toggleMasterEditMode={this.toggleMasterEditMode}
        />
      </div>

    );
  }
}

export default App;