import React, { useState, useEffect } from 'react';
import DATA from '../../data';
import Collection from '../../components/collection/Collection';
import BookingFrom from '../../components/bookingFrom/BookingFrom';
import './home.scss'

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(DATA)
  }, [])

  return (
    <div className="home-wrapper">
      <BookingFrom />
      <div className="items-wrapper">
        {items.map(item => <Collection item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Home;