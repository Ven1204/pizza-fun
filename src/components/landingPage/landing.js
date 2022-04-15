import React, {useState} from 'react';
import './landing.scss';
import { Link } from 'react-router-dom';


function Landing() {
  const [click, setClick] = useState();



  return (
    <div className='x-container container-fluid mx-0 p-0'>
      {/* <Link to="/all-products"> */}
      <div className='landing-container container-fluid mx-0 p-0'>

      </div>
        <button className='home-btn btn-danger' >Click Me</button>
      {/* </Link> */}

    </div>
  );
}

export default Landing;
