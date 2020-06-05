import React from 'react';

const CollectionItem = ({ data }) => {
  console.log(data);
  const { imageUrl, name, title } = data;
  return (
    <div className="card-item" style={{ width: 0 }}>
      <div className="img-container" >
        <img className="w-100" src={imageUrl} alt="" />
      </div >
      <div className="text-content">
        <h4>{name}</h4>
        <h3>{title}</h3>
      </div>
    </div >
  );
};

// const style = {
//   width: calc(100 % / 6);
// }
export default CollectionItem;