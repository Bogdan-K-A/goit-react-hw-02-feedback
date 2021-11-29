import { Component } from 'react'
import Container from './components/container/Container'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'

class App extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // }

  // state = {
  //   good: this.props.initialValue,
  //   neutral: this.props.initialValue,
  //   bad: this.props.initialValue,
  //   total: this.props.initialValue,
  // }

  // incrementGood = () => {
  //   this.setState(({ good }) => ({
  //     good: good + 1,
  //   }))
  // }

  // incrementNeutral = () => {
  //   this.setState(({ neutral }) => ({
  //     neutral: neutral + 1,
  //   }))
  // }

  // incrementBad = () => {
  //   this.setState(({ bad }) => ({
  //     bad: bad + 1,
  //   }))
  // }

  render() {
    // const { good, neutral, bad, total } = this.state

    return (
      <Container>
        <FeedbackOptions />
        {/* <h2>Please leave feedback</h2>
        <button type="button" onClick={this.incrementGood}>
          Good
        </button>
        <button type="button" onClick={this.incrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.incrementBad}>
          Bad
        </button> */}

        {/* <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad} </p>
        <p>Total: {total} </p> */}
      </Container>
    )
  }
}

export default App
