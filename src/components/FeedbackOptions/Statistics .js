import React from 'react'
import PropTypes from 'prop-types'

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      {/* <h3>Statistics</h3> */}
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad} </p>
      <p>Total: {total} </p>
      <p>Positive feedbeck: {percent} %</p>
    </>
  )
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
}
