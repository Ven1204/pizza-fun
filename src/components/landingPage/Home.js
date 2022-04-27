import React from 'react';
import Banner from '../bannerPage/Banner';

const Home = () => {
  return (
    <div className='all-container'>
      <Banner />

      <div className='product-container'>
        <div className='card-container'>
          {/* classic card */}
          {/* <Link to="Classic-Pizzas"> */}
            <div className='cards'>
              {/* <img src="https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg" alt="" /> */}
              <div className='text-container'>
                <h2 className='heading'>Classic</h2>
                <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui est, vulputate nec libero in, tempor commodo libero. Fusce malesuada odio nec hendrerit accumsan. Integer bibendum sapien augue, in suscipit mauris dignissim et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat augue ut leo accumsan, id efficitur erat rhoncus. Praesent vulputate efficitur ornare. Quisque lobortis facilisis pulvinar. Proin ac arcu ut erat pretium dictum luctus id ipsum.</p>
              </div>
            </div>
          {/* </Link> */}

          {/* deluxe card */}
          {/* <Link to="Deluxe-Pizzas"> */}
            <div className='cards'>
              {/* <img src="https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg" alt="" /> */}
              <div className='text-container'>
                <h2 className='heading'>Deluxe</h2>
                <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui est, vulputate nec libero in, tempor commodo libero. Fusce malesuada odio nec hendrerit accumsan. Integer bibendum sapien augue, in suscipit mauris dignissim et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat augue ut leo accumsan, id efficitur erat rhoncus. Praesent vulputate efficitur ornare. Quisque lobortis facilisis pulvinar. Proin ac arcu ut erat pretium dictum luctus id ipsum.</p>
              </div>
            </div>
          {/* </Link> */}

          {/* supreme card */}
          {/* <Link to="Supreme-Pizzas"> */}
            <div className='cards'>
              {/* <img src="https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg" alt="" /> */}
              <div className='text-container'>
                <h2 className='heading'>Supreme</h2>
                <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui est, vulputate nec libero in, tempor commodo libero. Fusce malesuada odio nec hendrerit accumsan. Integer bibendum sapien augue, in suscipit mauris dignissim et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat augue ut leo accumsan, id efficitur erat rhoncus. Praesent vulputate efficitur ornare. Quisque lobortis facilisis pulvinar. Proin ac arcu ut erat pretium dictum luctus id ipsum.</p>
              </div>
            </div>
          {/* </Link> */}


        </div>
      </div>
    </div>
  );
};

export default Home;
