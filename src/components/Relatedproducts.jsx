import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';  // Assuming Title is a separate component

const Relatedproducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            // Filter products by both category and subCategory in one go
            const filteredProducts = products.filter((item) => 
                item.category === category && item.subCategory === subCategory
            );

            // Save top 5 filtered products to the state
            setRelated(filteredProducts.slice(0, 5));
        }
    }, [products, category, subCategory]); // Depend on `products`, `category`, and `subCategory`

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'Related'} text2={'Products'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item) => (
                    <ProductItem 
                        key={item._id}  // Use _id for unique key
                        id={item._id} 
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Relatedproducts;
