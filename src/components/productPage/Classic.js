import React, {useState, useEffect} from 'react';
// import { options } from '../../data/data';

const Classic = () => {
  const [pizzas, setPizzas] = useState([]);

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  //     'X-RapidAPI-Key': '367271058cmsha1ce53052d8a0c4p137e65jsn44a2a4e0a101'
  //   }
  // };

  // fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options)
  //   .then(response => response.json())
  //   // .then(response => console.log(response))
  //   .catch(err => console.error(err));


  return (
    <div>
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
            {/* cards product  classic */}
              <div className='cards'>
                <img src="https://www.creationsincuisinecatering.com/wp-content/uploads/2020/03/a-la-carte-Meat-Lovers-Pizza.jpg" alt="" />
                <div className='text-container'>
                  <h2 className='heading'>Classic</h2>
                  <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui est, vulputate nec libero in, tempor commodo libero. Fusce malesuada odio nec hendrerit accumsan. Integer bibendum sapien augue, in suscipit mauris dignissim et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat augue ut leo accumsan, id efficitur erat rhoncus. Praesent vulputate efficitur ornare. Quisque lobortis facilisis pulvinar. Proin ac arcu ut erat pretium dictum luctus id ipsum.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classic;
