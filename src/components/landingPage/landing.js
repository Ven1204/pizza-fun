import React, {useState} from 'react';
import './landing.scss';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

function Landing() {
  const [showBg, setShowBg] = useState(true);
  // const [click, setClick] = useState();

  const handleClick = () => {
    setShowBg(!showBg);
  }

  return (
    // <div className='x-container container-fluid mx-0 p-0'>
    //   {/* <Link to="/all-products"> */}
    //   <div className='landing-container container-fluid mx-0 p-0'>

    //   </div>
    //     <button className='home-btn btn-danger' >Click Me</button>
    //   {/* </Link> */}

    // </div>
    <>
    {/* banner section */}
      <div className='x-container container-fluid mx-0 p-0'>
        <div className={`container-y container-fluid col-12 m-0 p-0 ${showBg? 'active-menu' : null}`} >
          <div className="green col col-4">this is green</div>
          <div className="white col col-4">this is white</div>
          <div className="red col col-4">this is red</div>
        </div>

        <div className="btn-cnt">
          <button onClick={handleClick} className='btn-x btn btn-success'>Click me!!</button>
        </div>
      </div>

      <div className='home'>
        <Navbar />
      </div>


    </>
  );
}

export default Landing;
