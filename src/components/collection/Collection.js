import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import './collection.scss';

const Collection = ({ item }) => {
  const { title, items } = item;
  return (
    <div className="items">
      <h2 className="name">{title}</h2>
      <div className="card-container">
        {items.map(i => <CollectionItem key={i.id} data={i} />)}
      </div>
    </div>
  );
};

export default Collection;