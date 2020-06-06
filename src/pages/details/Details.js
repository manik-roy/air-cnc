import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './details.scss';
import CurrentDate from '../../components/datePicker/CurrentDate';

const Details = () => {

  const getDate = () => {
    var date = new Date();
    date.setDate(date.getDate() + 4);
    return date;
  }
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(getDate());
  const dateHandler = (date, type) => {
    if (type === 'arrival') {
      setArrivalDate(date)
    }
    if (type === 'departure') {
      setDepartureDate(date)
    }

  }
  return (
    <div className="details-page">
      <div className="image-container">
        <img className="w-50 shadow" src="https://i.ibb.co/6PpKQLG/photo-1560347876-aeef00ee58a1.jpg" alt="flat" />
        <img className="w-50 shadow" src="https://i.ibb.co/6YPvb0x/photo-1522708323590-d24dbb6b0267.jpg" alt="flat" />
      </div>
      <div className="info-container">
        <div className="left">
          <div className="name-area">
            <h3>Light bright air stylish apt & safe peaceful stay</h3>
            <div className="avatar"><img className="shadow" src="https://i.ibb.co/yyDX3Gn/image.png" alt="mentor" />
              <p className="text-center pt-1">Rowdra</p>
            </div>
          </div>
          <div className="location-area">
            <h4>Dhaka Bangladesh</h4>
            <p>4 guests · 2 bedrooms · 2 beds · 2 baths</p>
          </div>
          <div className="facility-area">
            <ul>
              <li>
                <span><img className="w-100" src="https://i.ibb.co/ZzvKvCh/home.png" alt="home" /></span>
                <div>
                  <h4>Entire home</h4>
                  <p>You will have the condominium to yourself.</p>
                </div>
              </li>
              <li>
                <span><img className="w-100" src="https://i.ibb.co/6HMJYsy/checkmark-square-2.png" alt="check" /></span>
                <div>
                  <h4>Self Check In</h4>
                  <p>You can check in with the doorman</p>
                </div>
              </li>
              <li>
                <span><img className="w-100" src="https://i.ibb.co/g9q0psr/solid.png" alt="home" /></span>
                <div>
                  <h4>Sparking Clean</h4>
                  <p>10 recent guests said this place was Sparking Clean</p>
                </div>
              </li>
              <li>
                <span><img className="w-100" src="https://i.ibb.co/6grfPwr/single-01.png" alt="home" /></span>
                <div>
                  <h4>Rowdra is a Super host</h4>
                  <p>Super hosts are experienced, highly rates hosts who are committed to providing great service </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="description">
            <p>It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright looks comfortable stay <br /> <br /> It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright looks comfortable stay
            It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright looks comfortable stay
            <br />
              <br />
              <span>Read more about the space</span>
            </p>
          </div>
          <div className="priceAndReview">
            <h4>Review</h4>
            <span className="d-flex">
              <StarRatingComponent
                name="rate1"
                starCount={1}
                starColor={'#40e37c'}
                value={1} />
              <p className="pt-2">4.5(20)</p>
            </span>
            <span>
            </span>
          </div>
        </div>
        <div className="right shadow mt-5">
          <div className="review">
            <h4>$34/ <span>night</span> </h4>
            <span className="d-flex">
              <StarRatingComponent
                name="rate1"
                starCount={1}
                starColor={'#40e37c'}
                value={1} />
              <p className="pt-2">4.5(20)</p>
            </span>
          </div>
          <h4>Dates</h4>
          <div className="dates">
            <div className="input-date">
              <CurrentDate data={arrivalDate} dateHandler={dateHandler} type="arrival" />
              <span className="arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
            </div>
            <div className="input-date">
              <CurrentDate data={departureDate} dateHandler={dateHandler} type="departure" />
            </div>
          </div>
          <div className="guests-area ">
            <h4>Guests</h4>
            <div className="guest-container">
              <div className="d-flex justify-content-between align-items-center">
                <h4>3 Guests</h4>
                <h6 className="up-arrow" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fas fa-angle-down"></i></h6>
              </div>
              <div className="collapse" id="collapseExample">
                <div className="d-flex justify-content-between guests-item align-items-center">
                  <h5>Adults</h5>
                  <h6>1</h6>
                </div>
                <div className="d-flex justify-content-between guests-item align-items-center">
                  <h5>Child</h5>
                  <h6>1</h6>
                </div>
                <div className="d-flex justify-content-between guests-item align-items-center">
                  <h5>Baby</h5>
                  <h6>1</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-area">
            <div className="d-flex justify-content-between align-items-center">
              <h5>$34 x 4 nights</h5>
              <h6>$136</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5>Cleaning fee</h5>
              <h6>$10</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5>Service fee</h5>
              <h6>$10</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5>Total </h5>
              <h6>$156</h6>
            </div>
          </div>
          <div className="reserve">
            <button>Reserve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
