import React, { useState } from 'react';
import CurrentDate from '../datePicker/CurrentDate';
import { withRouter } from 'react-router-dom';

const BookingFrom = props => {

  const getDate = () => {
    var date = new Date();
    date.setDate(date.getDate() + 4);
    return date;
  }

  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(getDate());

  const [guests, setGuests] = useState({
    adults: 1,
    child: 1,
    baby: 0,
    location: '',
    arrival: arrivalDate,
    Departure: departureDate,
  })


  const onChangeHandler = e => {
    setGuests({ ...guests, [e.target.name]: e.target.value })
  }

  const dateHandler = (date, type) => {
    if (type === 'arrival') {
      setArrivalDate(date)
    }
    if (type === 'departure') {
      setDepartureDate(date)
    }

  }


  const clickHandler = (name, v) => {
    let value = guests[name] + v;
    if (name === 'adults') {

      if (value < 0) {
        value = 0;
        return setGuests({ ...guests, adults: value })
      }
      setGuests({ ...guests, adults: value })
    }
    if (name === 'baby') {

      if (value < 0) {
        value = 0;
        return setGuests({ ...guests, baby: value })
      }
      setGuests({ ...guests, baby: value })
    }
    if (name === 'child') {

      if (value < 0) {
        value = 0;
        return setGuests({ ...guests, child: value })
      }
      setGuests({ ...guests, child: value })
    }

  }


  const submitHandler = e => {
    console.log(guests);
    e.preventDefault()
  }



  const { location, adults, child, baby } = guests;
  return (
    <form className="booking-area" onSubmit={submitHandler} autoComplete="false">
      <h4>Where do your want to go</h4>
      <div className="location-search">
        <div className="input-item shadow">
          <label htmlFor="location">location</label>
          <input onChange={onChangeHandler} type="text" value={location} name="location" className="location" placeholder="Add city, Landmark or address" />
        </div>
      </div>
      <div className="date-picker-wrapper">
        <div className="d-flex  dateInput shadow">
          <p className="d-block">Arrival</p>
          <div className="input-date">
            <CurrentDate data={new Date()} dateHandler={dateHandler} type="arrival" />
            <span className="calender"><i className="far fa-calendar-minus"></i></span>
          </div>
        </div>
        <div className="d-flex  dateInput shadow">
          <p className="d-block">Departure</p>
          <div className="input-date">
            <CurrentDate data={getDate()} dateHandler={dateHandler} type="departure" />
            <span className="calender"><i className="far fa-calendar-minus"></i></span>
          </div>
        </div>
      </div>
      <div className="booking-from shadow mt-3">
        <div className="input-item">
          <div className="input-heading">
            <span>Guests</span>
            <h6>
              {adults ? `${adults} adults, ` : ' '}
              {child ? `${child} child, ` : ' '}
              {baby ? `${baby} baby` : ' '}</h6>
          </div>
          <div className="item-option mb-3">
            <p>Adults</p>
            <div className="btn-action">
              <span className="decrement"
                onClick={() => clickHandler('adults', -1)}
              >─</span>
              <span>{adults}</span>
              <span className="increment"
                onClick={() => clickHandler('adults', +1)}
              >+</span>
            </div>
          </div>
          <div className="item-option">
            <p>Child<span>Ae 2-12</span></p>
            <div className="btn-action">
              <span className="decrement"
                onClick={() => clickHandler('child', -1)}
              >─</span>
              <span>{child}</span>
              <span className="increment"
                onClick={() => clickHandler('child', +1)}
              >+</span>
            </div>
          </div>
          <div className="item-option">
            <p>Babies<span>Younger than 2</span></p>
            <div className="btn-action">
              <span className="decrement"
                onClick={() => clickHandler('baby', -1)}
              >─</span>
              <span>{baby}</span>
              <span className="increment"
                onClick={() => clickHandler('baby', +1)}
              >+</span>
            </div>
          </div>
          <button className="apply">Apply</button>
        </div>
      </div>
      <button className="search"
        onClick={() => props.history.push('/search')}
        type="submit"><span><i className="fas fa-search"></i></span> Search</button>
    </form>
  );
};

export default withRouter(BookingFrom);