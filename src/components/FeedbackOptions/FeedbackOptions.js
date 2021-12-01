// import { Component } from 'react'
// import { Statistics } from './Statistics '
import './FeedbackOptions.css'

export const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <div>
      {/* <h2>Please leave feedback</h2> */}
      <button type="button" onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  )
}

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   options = ['good', 'neutral', 'bad']

//   return (
//     <>
//       {options.map((option) => (
//         <button
//           type="button"
//           key={option}
//           onClick={(e) => {
//             console.log(e.target)
//             if (e.target) {
//             }
//           }}
//         >
//           {option}
//         </button>
//       ))}
//     </>
//   )
// }
