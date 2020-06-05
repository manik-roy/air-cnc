import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const CollectionItem = ({ data }) => {
  const { imageUrl, name, title, rating, totalReview, price } = data;
  return (
    <div className="card-item" style={{ width: 0 }}>
      <div className="img-container" >
        <img className="w-100" src={imageUrl} alt="" />
      </div >
      <div className="text-content">
        <h4>{name}</h4>
        <h3>{title}</h3>
        <h6> $ {price} per person</h6>
        <span className="d-flex align-items-center raging"><StarRatingComponent
          name="rate1"
          starCount={5}
          starColor={'#40e37c'}
          value={rating} /> <p> {` ${totalReview}`}</p></span>
      </div>
    </div >
  );
};

export default CollectionItem;