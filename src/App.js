import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={
            <>
              <div className='container'>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutIconLink />
              </div>
            </>
          } />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>

    </FeedbackProvider>
  );
}

export default App;;