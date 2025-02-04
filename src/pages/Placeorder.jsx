import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/Shopcontext'

const Placeorder = () => {
  const [method, setMethod] = useState('mpesa');
  const {navigate} = useContext(ShopContext)


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          {/* Left Side - Delivery Info */}
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'Delivery'}  text2={'Infomation'} />
          </div>
          <div className='flex gap-3'>
                  <input type="text" placeholder='First name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
                  <input type="text" placeholder='Last name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          </div>
          <input type="email" placeholder='email' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='street' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          <div className='flex gap-3'>
                  <input type="text" placeholder='Estate' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
                  <input type="text" placeholder='City/Town' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          </div>
          <div className='flex gap-3'>
                  <input type="number" placeholder='postal code' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
                  <input type="text" placeholder='country' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          </div>
          <input type="number" placeholder='Phone no' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
      </div>
      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
            <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" alt="" src={assets.stripe_logo} />
            </div>
            <div onClick={()=>setMethod('mpesa')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'mpesa' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" alt="" src={assets.mpesa_logo} />
            </div>
            <div onClick={()=>setMethod('bit')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'bit' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" alt="" src={assets.bit} />
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-6 py-3 text-sm'>Place Order</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Placeorder
