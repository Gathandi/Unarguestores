 import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import Relatedproducts from '../components/Relatedproducts'

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false)
  const [image, setImage] =  useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.forEach((item) => { 
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]); 
      }
    });
  }

  useEffect(()=>{
    fetchProductData();
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/* Product Data */}
          <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
           
           {/* Product Images */}  
           <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
               <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                  productData.image.map((item, index)=>(
                    <img onClick={()=>setImage(item)} src={item}  key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                  ))
                }
               </div> 
               <div className='w-full sm:w-[80%]'>
                  <img src={image} className='w-full h-auto' alt="" />

               </div>
           </div>

                  {/* Product image info */}
                  <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                      <p className='pl-2'>(20)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                      <p>Select Size</p>
                      <div className='flex gap-2'>
                        {productData.sizes.map((item, index)=>(
                         <button
                         onClick={() => setSize(item)}
                         className={`${item === size ? 'border-orange-500' : ''} border py-2 px-4 bg-gray-100`}
                         key={index}
                       >
                         {item}
                       </button>
                        
                        ))}
                        
                      </div>
                    </div>
                     <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to Cart</button>
                    <hr className='mt-8 sm:w-4/5' />
                        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                          <p>100% Original product</p>
                          <p>Cash on delivery is Available</p>
                          <p>Easy return & Policy within 7 days </p>
                        </div>
                  </div>
          </div>
          {/* Desciption & Review Section */}
          <div className='mt-20'>
            <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews{21}</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-700'>
            <p>Elevate your casual wardrobe with this classic 3-button collar t-shirt, designed for both style and comfort. Made from premium, breathable cotton fabric, this t-shirt offers a soft, lightweight feel that's perfect for all-day wear. The structured collar and button placket add a touch of sophistication, making it ideal for casual outings, relaxed office settings, or weekend gatherings. Its durable stitching ensures long-lasting quality, while the versatile design pairs effortlessly with jeans, chinos, or shorts. Whether you're dressing up or keeping it laid-back, this t-shirt is a must-have addition to your collection.</p>    
            </div>
          </div>
          {/* Related Products */}
          <Relatedproducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ): <div className='opacity-0'>

  </div>
}

export default Product
