import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt}) => {
  const {picture, name, price} = tShirt
  return (
    <div className='tShirt'>
      <img src={picture} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default TShirt;