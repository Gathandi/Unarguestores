import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

const Latest_collection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts]=useState([])

    useEffect(()=>{
      
      setLatestProducts(products.slice(0, 10));
    }, [])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Valentines'} text2={'Collections'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Step into style, where every piece tells a story—discover the latest trends in our collection!
            </p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
  {
    latestProducts.map((item, index) => (
      <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
    ))
  }
</div>
      
    </div>
  )
}

export default Latest_collection
