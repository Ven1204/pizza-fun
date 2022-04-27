import React, {useState} from 'react';

function Landing() {
  const [showHome, setShowHome] = useState(true);


  const handleClick = () => {
    setShowHome(!showHome);
  }

  return (
    <>
    {/* banner section italian flag*/}
      <div className='x-container container-fluid mx-0 p-0'>
        <div className={`container-y container-fluid col-12 m-0 p-0 ${showHome? 'active-menu' : null}`} >
          <>
            <div className="green col col-4">this is green</div>
            <div className="white col col-4">this is white</div>
            <div className="red col col-4">this is red</div>
          </>
          <div className="btn-cnt">
            <button onClick={handleClick} className='btn-x btn btn-success'>Click me!!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
