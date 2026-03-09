import React from 'react'
import Header from '../components/Header'
import VenueType from '../components/VenueType'
import TopVenues from '../components/TopVenues'
import Banner from '../components/Banner'

function Home() {
  return (
    <div>
      <Header/>
      <VenueType/>
      <TopVenues/>
      <Banner/>
    </div>
  )
}

export default Home