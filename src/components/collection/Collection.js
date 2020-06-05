import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import './collection.scss';

const Collection = ({ item }) => {
  const { title, items } = item;
  return (
    <div className="items">
      <div className="item-title">
        <h2 className="name">{title}</h2>
        <p>See all <span><i className="fas fa-angle-right"></i></span> </p>
      </div>
      <div className="card-container">
        {items.map(i => <CollectionItem key={i.id} data={i} />)}
      </div>
    </div>
  );
};

export default Collection;