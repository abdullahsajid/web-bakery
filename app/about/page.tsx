import React from 'react'
import AboutHero from '../_components/about-hero'
import AboutDetails from '../_components/about-details'
import AboutAchievement from '../_components/about-achievement'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <div className='px-10 py-7'>
        <AboutDetails/>
        <AboutAchievement/>
      </div>
    </div>
  )
}

export default page
