import { useContext, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate ratings Average
  let average = feedback.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return <div className='feedback-stats'>
    <h3>{feedback.length} Reviews</h3>
    <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>

  </div>;
}

export default FeedbackStats;
