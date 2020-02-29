import React from 'react';
import QuoteDisplayRandom from './QuoteDisplayRandom.jsx';
import QuoteAddNew from './QuoteAddNew.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    fetch('/api/quotes')
      .then((quotes) => quotes.json())
      .then((quotes) => {
        this.setState({ quotes });
      })
      .catch((err) => console.log('error at componentDidMount fetch', err));
  }

  render() {
    return (
      <div>
        {/* <Spotify /> */}
        <QuoteDisplayRandom quotes={this.state.quotes} />
        <QuoteAddNew />
        {/* <QuotesContainer /> */}
      </div>

    );
  }
}

export default App;