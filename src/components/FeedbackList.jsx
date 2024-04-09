import { motion, AnimatePresence } from 'framer-motion';
import Proptypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {

  

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (

    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1, }}
            exit={{ scale: 0 }}
          >
            <FeedbackItem key={item.id}
              item={item}
              handleDelete={handleDelete} />
          </motion.div>
        ))
        }
      </AnimatePresence>
    </div >
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id}
  //         item={item}
  //         handleDelete={handleDelete} />
  //     )
  //     )}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  feedback: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.oneOfType([Proptypes.string, Proptypes.number]).isRequired,
      text: Proptypes.string.isRequired,
      rating: Proptypes.number.isRequired,
    })
  )
};

export default FeedbackList;
