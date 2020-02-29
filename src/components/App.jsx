import React from 'react';


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
        {/* <QuoteDisplayRandom />
        <QuoteAddNew />
        <QuotesContainer /> */}
      </div>

    );
  }
}

export default App;