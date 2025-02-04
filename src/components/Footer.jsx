import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-black text-white'>
        <div>
            <img src={assets.logo1} alt="" className='mb-5 w-16'/>
            <p className='w-full md:w-2/3 text-white pl-2 pb-2'>
            At UnargueStores, we pride ourselves on delivering exactly what you need, when you need it, and how you want it. Guided by our motto — WHAT, WHEN, HOW? Unarguebly the Best!! 
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-white pb-2'>
                <Link to={'/'}><li className='cursor-pointer'>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-white'>
                <li>+245 705626413</li>
                <li>contact@unarguestores.com</li>
            </ul>
        </div>
      </div>
      <p className='py-5 text-sm text-center'>Copyright 2024@unarguestores.com. All Right Reserved</p>
    </div>
  )
}

export default Footer
