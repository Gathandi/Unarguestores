import React from 'react'

const Newsletterbox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-color-gray-700'>Subscribe now & get 30% off</p>
     <p className='text-gray-400 mt-3'>
     Join our fashion community and be the first to access exclusive deals, new arrivals, and style inspiration straight to your inbox!
     </p>
     <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
         <input type="email" placeholder='Enter your email' required className='w-full sm:flex-1 outline-none' />
         <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
     </form>
    </div>
  )
}

export default Newsletterbox
