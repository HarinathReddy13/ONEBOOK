import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Venues from './pages/Venues'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyBookings from './pages/MyBookings'
import Booking from './pages/Booking'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/venues' element={<Venues/>} />
        <Route path='/venues/:type' element={<Venues/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<MyProfile/>} />
        <Route path='/bookings' element={<MyBookings/>} />
        <Route path='/booking/:venueId' element={<Booking/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App