import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch data from database
  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback?sort=id&_order=desc');

    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id) ? { ...item, ...updItem } : item));
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      setFeedback(feedback.filter((item) => (item.id !== id)));
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
    changeCardColor(item.id);
  };

  // Change the card color while editing the card
  const changeCardColor = (id) => {
    console.log('color change', id);
  };

  return <FeedbackContext.Provider value={
    {
      feedback,
      feedbackEdit,
      isLoading,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,
    }
  }>
    {children}
  </FeedbackContext.Provider>;
};

export default FeedbackContext;

