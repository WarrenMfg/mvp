import React from 'react';
import { newId } from '../utils.js';
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
        <QuoteAddNew newId={ newId } />
        {/* <QuotesContainer /> */}
      </div>

    );
  }
}

export default App;