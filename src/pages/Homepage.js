import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import LatestCollections from '../components/LatestCollections'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <LatestCollections/>
    </div>
  )
}
