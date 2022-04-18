import React, {useState, useEffect} from 'react';
import Cards from '../productCard/card';
// import { options } from '../../data/data';

const Classic = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/pizza')
      .then(res => {
        return res.json()
      })
      .then(data =>{
        setPizzas(data);
      })
  }, [])

  return (
    <div>
      <div className='all-container'>
        <div className='product-container'>
          <div className='card-container'>
            {/* cards product  classic */}
              {/* <div className='cards'>
                <img src="https://www.creationsincuisinecatering.com/wp-content/uploads/2020/03/a-la-carte-Meat-Lovers-Pizza.jpg" alt="" />
                <div className='text-container'>
                  <h2 className='heading'>Classic</h2>
                  <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui est, vulputate nec libero in, tempor commodo libero. Fusce malesuada odio nec hendrerit accumsan. Integer bibendum sapien augue, in suscipit mauris dignissim et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat augue ut leo accumsan, id efficitur erat rhoncus. Praesent vulputate efficitur ornare. Quisque lobortis facilisis pulvinar. Proin ac arcu ut erat pretium dictum luctus id ipsum.</p>
                </div>
              </div> */}
              {pizzas && pizzas.map(pizza => {
                  return <Cards  pizza={pizza}/>}
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classic;
