import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  
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
            />
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


export default FeedbackList;
