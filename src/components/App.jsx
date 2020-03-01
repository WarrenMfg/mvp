import React from 'react';
import QuoteDisplayRandom from './QuoteDisplayRandom.jsx';
import QuoteAddNew from './QuoteAddNew.jsx';
import QuotesContainer from './QuotesContainer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      random: ''
    };

    this.updateQuotes = this.updateQuotes.bind(this);
    this.handleEditRandom = this.handleEditRandom.bind(this);
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

  updateQuotes(newQuote) {
    this.setState((prevState) => {
      prevState.quotes.push(newQuote);
      return {
        quotes: prevState.quotes.reverse()
      };
    });
  }

  handleEditRandom(updatedQuote) {
    fetch('/api/quotes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedQuote)
    })
      .then((dbUpdatedQuote) => dbUpdatedQuote.json())
      .then((updatedRandom) => this.setState({random: updatedRandom.value}))
      .catch((err) => console.log('error in App.jsx handleEdit', err));
  }

  render() {
    return (
      <div>
        {/* <Spotify /> */}
        <QuoteAddNew updateQuotes={this.updateQuotes} />
        <QuoteDisplayRandom quote={this.state.random} handleEditRandom={this.handleEditRandom} />
        <QuotesContainer quotes={this.state.quotes} handleEdit={this.handleEdit} />
      </div>

    );
  }
}

export default App;