import React from 'react'
import Hero from '../components/Hero'
import Latest_collection from '../components/Latest_collection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Newsletterbox from '../components/Newsletterbox'

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest_collection/>
      <Bestseller />
      <Ourpolicy/>
      <Newsletterbox/>
    </div>
  )
}

export default Home
