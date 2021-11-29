import { Component } from 'react'
import Container from './components/container/Container'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Notification } from './components/FeedbackOptions/Notification'
import { Section } from './components/FeedbackOptions/Section'
import { Statistics } from './components/FeedbackOptions/Statistics '

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    percent: this.props.initialValue,
    visible: false,
  }

  show = () => {
    this.setState({ visible: true })
  }

  incrementGood = () => {
    this.setState(({ good }) => ({
      good: good + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
    this.show()
  }

  incrementNeutral = () => {
    this.setState(({ neutral }) => ({
      neutral: neutral + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
    this.show()
  }

  incrementBad = () => {
    this.setState(({ bad }) => ({
      bad: bad + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
    this.show()
  }

  countTotalFeedback = () => {
    this.setState(({ total }) => ({
      total: total + 1,
    }))
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      percent: Math.round((good * 100) / total),
    }))
  }

  render() {
    const { good, neutral, bad, total, percent, visible } = this.state
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={this.incrementGood}
            onIncrementNeutral={this.incrementNeutral}
            onIncrementBad={this.incrementBad}
          />
        </Section>

        <Section title="Statistics">
          {visible ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    )
  }
}

export default App

// const App = () => {
//   return (
//     <Container>
//       <FeedbackOptions />
//     </Container>
//   )
// }
