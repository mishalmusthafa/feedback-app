import PropTypes from "prop-types";
function FeedbackStats({ feedback }) {

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

FeedbackStats.propTypes = {
  feedback: PropTypes.array
};



export default FeedbackStats;
