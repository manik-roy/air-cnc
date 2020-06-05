import React, { useState, useEffect } from 'react';
import DATA from '../../data';
import Collection from '../../components/collection/Collection';
import './home.scss'
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(DATA)
  }, [])
  return (
    <div className="home-wrapper">
      <div className="booking-area">
        <h4>Where do your want to go</h4>
        <div className="location-search">
          <div className="input-item shadow">
            <label for="location">location</label>
            <input type="text" name="location" className="location" placeholder="Add city ,Landmark or address" />
          </div>
        </div>
      </div>
      <div className="items-wrapper">
        {items.map(item => <Collection item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Home;