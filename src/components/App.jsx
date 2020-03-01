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

  render() {
    return (
      <div>
        {/* <Spotify /> */}
        <QuoteAddNew updateQuotes={this.updateQuotes} />
        <QuoteDisplayRandom quote={this.state.random} />
        <QuotesContainer quotes={this.state.quotes} />
      </div>

    );
  }
}

export default App;