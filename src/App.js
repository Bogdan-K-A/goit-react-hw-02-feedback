import { Component } from 'react'
import Container from './components/container/Container'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Notification } from './components/FeedbackOptions/Notification'
import { Section } from './components/FeedbackOptions/Section'
import { Statistics } from './components/FeedbackOptions/Statistics '

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const values = Object.values(this.state)
    let total = 0
    for (const value of values) {
      total += value
    }
    return total
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  increment = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }))
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const keys = Object.keys(this.state)

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.increment} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
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
