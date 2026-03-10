import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className='text-gray-700'>
      <p className='text-3xl font-light  text-center  '>CONTACT <span className='mx-1 text-gray-800 font-medium'>US</span></p>
      <div className='flex gap-5 justify-around items-center mt-5 flex-wrap'>
        <img className='w-1/3 rounded-2xl min-w-70' src={assets.VNR} alt="" />
        <div className='w-1/3 flex flex-col gap-8 min-w-70'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>Our <span className='font-medium text-gray-800'>OFFICE</span></p>
            <p >Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Repellendus, ex?</p>
          </div>
          <div>
            <p><span className='text-gray-800 font-medium'>Tel:</span> +91 73966 45410</p>
            <p><span className='text-gray-800 font-medium'>Email:</span> 10b.harinathreddy@gmail.com</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>Careers at <span className='text-gray-800 font-medium'>ONEBOOK</span></p>
            <p>Learn more about our teams and job openings.</p>
            <button className='flex rounded-md my-2 p-4 border border-gray-600 cursor-pointer w-50 items-center justify-center hover:bg-gray-600 hover:text-white transition-all duration-200'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact