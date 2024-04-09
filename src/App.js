import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [aboutIcon, setAboutIcon] = useState(true);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      setFeedback(feedback.filter((item) => (item.id !== id)));
  };


  const deleteAboutIcon = () => {
    setAboutIcon(false);
  };


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };


  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={
            <>
              <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </div>
              <AboutIconLink />
            </>
          } />
          <Route path='/about' element={
            <div className='container'>
              <AboutPage />
            </div>
          }
          />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;;