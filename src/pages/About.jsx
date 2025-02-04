import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/Newsletterbox'

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'}/>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-m'>Founded in 2022 after the COVID-19 pandemic reshaped shopping habits, Unargues Stores is an innovative online fashion e-commerce shop committed to delivering quality and style with convenience. We believe that fashion should be accessible, flexible, and tailored to your needs—whether it’s what you want, when you want it, or how you want it. Our motto embodies this customer-centric approach: "What do you want? When do you want it? How do you want it?"</p>
          <b className='text-gray-700'>Our Mission</b>  
          <p className='text-m'>At Unargues Stores, we prioritize affordability without compromising on quality, offering the latest fashion trends at unarguably the best prices. With a seamless online shopping experience, secure transactions, and reliable delivery, we ensure that looking good has never been easier.
          Stay stylish, shop smart—only at Unargues Stores. 🚀</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
          <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance</b>
              <p>At Unargues Stores, we guarantee top-notch quality by sourcing premium fashion items and ensuring rigorous quality checks before delivery.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience</b>
              <p>We prioritize convenience with a seamless online shopping experience, fast delivery, and multiple payment options to suit your needs.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service</b>
              <p>Our dedicated support team ensures exceptional customer service with prompt responses, hassle-free returns, and a commitment to customer satisfaction.</p>
          </div>
          
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
