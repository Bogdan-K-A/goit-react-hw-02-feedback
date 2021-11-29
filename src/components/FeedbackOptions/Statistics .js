// import React from 'react'

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
