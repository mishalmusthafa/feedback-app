// import { Route, Routes } from 'react-router-dom';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {


  return (
    <div className='container'>
      <Card>
        <div className='about'>
          <h1>About Our App</h1>
          <p>This is a Feedback app by using the React framework. Thank you for using our app. We will be notify you if there is any update</p>
          <p>Version:1.0.0</p>
          <p><Link to='/'>Back to home</Link></p>
        </div>
      </Card>
    </div>

  );

}

export default AboutPage;
