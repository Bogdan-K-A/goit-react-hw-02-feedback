import { Component } from 'react'
import Container from './components/container/Container'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  incrementValue = () => {
    this.setState((el) => ({
      good: el.good + 1,
    }))
    console.log(this.good)
  }

  render() {
    // const { good, neutral, bad } = this.state

    return (
      <Container>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.incrementValue}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h3>Statistics</h3>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
      </Container>
    )
  }
}

export default App
