import React from 'react';

class QuoteDisplayRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const random = this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)];
      this.setState({ random });
    }
  }

  render() {
    const { random } = this.state;
    return (
      <div>
        <p>{random.quote}</p>
        <div>
          <p>{random.author}</p>
          <p>{random.contributor}</p>
          <p>{random.dateAdded}</p>
          {random.dateModified && <p>{random.dateModified}</p>}
        </div>
      </div>
    );
  }
}

export default QuoteDisplayRandom;