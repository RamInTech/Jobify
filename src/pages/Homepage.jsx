import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HeroCard'
import JobListings from '../components/JobListings'
import ViewAlljobs from '../components/ViewAlljobs'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div>
      <Hero />
      <HomeCard />
      <JobListings isHome={true}/>
      <ViewAlljobs />
      <Footer />
    </div>
  )
}

export default Homepage