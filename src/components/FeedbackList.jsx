import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import Spinner from './shared/Spinner';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }

  return isLoading ? <Spinner /> : (<div className="feedback-list">
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
  </div >);



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
