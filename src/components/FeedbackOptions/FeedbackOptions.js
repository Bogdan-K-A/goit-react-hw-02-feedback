import { Component } from 'react'
import './FeedbackOptions'
import { Statistics } from './Statistics '

export class FeedbackOptions extends Component {
  static defaultProps = {
    initialValue: 0,
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    percent: this.props.initialValue,
  }

  incrementGood = () => {
    this.setState(({ good }) => ({
      good: good + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  incrementNeutral = () => {
    this.setState(({ neutral }) => ({
      neutral: neutral + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  incrementBad = () => {
    this.setState(({ bad }) => ({
      bad: bad + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
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
    const { good, neutral, bad, total, percent } = this.state
    // const totatlValue = total.length

    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.incrementGood}>
          Good
        </button>
        <button type="button" onClick={this.incrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.incrementBad}>
          Bad
        </button>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percent={percent}
        />
      </>
    )
  }
}
