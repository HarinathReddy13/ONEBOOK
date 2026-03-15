import React from 'react'
import { assets } from '../assets/assets'

function MyProfile() {

  const [userData,setUserData] = React.useState({
    name : 'Harinath Reddy',
    image: 'https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png',
    email : 'harinathreddy@gmail.com',
    contact : '+91 73966 45410',
    address : {
      line1: 'Lorem ipsum dolor sit amet consectetur',
      line2: 'Nulla facere unde, assumenda mollitia'
    },
    gender: 'Male',
    dob:'2005-10-13'
  })
  return (
    <div>
      <div className='grid grid-cols-4'>
        <div className='col-span-1 flex flex-col items-center gap-4 p-5'>
          <img className='w-50 rounded-full' src={userData.image} alt="" />
          <p className='text-3xl font-semibold p-3'>{userData.name}</p>
        </div>
        <div className='col-span-2 flex flex-col items-baseline gap-4 p-5'>
          <p className='text-gray-500 text-xl underline'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-3 w-full'>
            <p className='col-span-2 text-gray-700'>Email Id:</p>
            <p className='col-span-1 text-gray-900'>{userData.email}</p>
          </div>
          <div className='grid grid-cols-3 w-full'>
            <p className='col-span-2 text-gray-700'>Contact number:</p>
            <p className='col-span-1 text-gray-900'>{userData.contact}</p>
          </div>
          <div className='grid grid-cols-3 w-full'>
            <p className='col-span-2 text-gray-700'>Address:</p>
            <p className='col-span-1 text-gray-900'>{userData.address.line1} <br /> {userData.address.line2}</p>
          </div>
          <p className='text-gray-500 text-xl underline mt-5'>BASIC INFORMATION</p>
          <div className='grid grid-cols-3 w-full'>
            <p className='col-span-2 text-gray-700'>Gender:</p>
            <p className='col-span-1 text-gray-900'>{userData.gender}</p>
          </div>
          <div className='grid grid-cols-3 w-full'>
            <p className='col-span-2 text-gray-700'>Birthday:</p>
            <p className='col-span-1 text-gray-900'>{userData.dob}</p>
          </div>
          <div className='mt-5 flex gap-10'>
            <button className='border border-gray-600 text-gray-600 px-8 py-3 rounded-full font-light cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 '>Edit Profile</button>
            <button className='border border-gray-600 text-gray-600 px-8 py-3 rounded-full font-light cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 '>Change Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile