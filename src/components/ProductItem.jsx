import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, price, name }) => {
  const { currency } = useContext(ShopContext); 

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm text-black-800">{name}</p>
      <p className="text-sm font-medium text-orange-500">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
