
import { useState } from 'react';
import Card from "./shared/Card";
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = ({ target: { value } }) => {
    setText(value);

    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);

    } else if (value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be atleast 10 characters');

    } else {
      setBtnDisabled(false);
      setMessage(null);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText('');
      setBtnDisabled(true);
    }
  };

  return <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect select={(rating) => { setRating(rating); }} />
      <div className='input-group'>
        <input onChange={handleTextChange}
          type='text'
          placeholder='Write a review'
          value={text}
        />
        <Button type="suBmit" isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className='message'>{message}</div>}
    </form>

  </Card>;
}

export default FeedbackForm;
