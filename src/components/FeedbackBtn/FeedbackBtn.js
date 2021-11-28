import { Component } from 'react'
import './FeedbackBtn'

class FeedbackBtn extends Component {
  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </>
    )
  }
}

export default FeedbackBtn
