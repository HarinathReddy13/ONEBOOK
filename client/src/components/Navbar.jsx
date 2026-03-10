import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate=useNavigate();

  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] = useState(true);
  return (
    <div className='flex items-center justify-between py-5 mb-5 border-b border-b-gray-600'>
      <div className='cursor-pointer'>
        <a className='text-3xl font-extrabold' href="/">ONE BOOK</a>
      </div>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-blue-950 w-6 m-auto hidden'/>
        </NavLink>
        <NavLink to='/venues'>
          <li className='py-1'>VENUES</li>
          <hr className='border-none outline-none h-0.5 bg-blue-950 w-6 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT US</li>
          <hr className='border-none outline-none h-0.5 bg-blue-950 w-8 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT US</li>
          <hr className='border-none outline-none h-0.5 bg-blue-950 w-8 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token 
          ? 
          <div className='flex items-center gap-2 group relative'>
            <img className='w-12 rounded-full' src="https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png" alt="" />
            <img className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7H7CMz3RFZfLffDsKUs3zXAGFWjfwX1d9w&s" alt="" />
            <div className='absolute top-0 right-0 pt-20 text-base font-medium text-gray-500 hidden group-hover:block'>
              <div className='bg-stone-100 min-w-48 flex flex-col rounded gap-4 p-4'>
                <p onClick={()=>navigate('/profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('/bookings')} className='hover:text-black cursor-pointer'>My Bookings</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
          : <button onClick={()=>navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>SignUp</button>
        }
      </div>
    </div>
  )
}

export default Navbar