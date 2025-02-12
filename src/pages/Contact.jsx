import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletterbox  from '../components/Newsletterbox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'>Our Shop</p>
          <p className='text-gray-500'>Chui Mall <br/> Eastleigh 5th Street opp Bangkok Mall</p>
          <p className='text-gray-500'>Call/App: 0705626413 <br /> email: sales@unargues.com </p>
          <p className='font-semibold text-xl text-gray-700'>Careers at Unarguestores</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <Newsletterbox/>
    </div>
  )
}

export default Contact
