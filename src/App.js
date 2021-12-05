import { Component } from 'react'
import { Container } from './components/container/Container'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Notification } from './components/Notification/Notification'
import { Section } from './components/Section/Section'
import { Statistics } from './components/Statistics/Statistics '

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    return Math.round((good / this.countTotalFeedback()) * 100)
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
