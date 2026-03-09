import React from 'react'

function Header() {
  return (
    <div className=' bg-gray-400 flex flex-col md:flex-row gap-20 rounded-lg px-6 md:px-10 lg:px-20'>
      {/* Left side */}
      <div className='md:w-1/2 relative flex items-center p-5'>
        <img className='w-full md:absolute h-auto rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDTn5vZvi3iCDADrJKdY0N2crpk-e9YCJ3g&s" alt="" />
      </div>

      {/* right side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[10vw] md:mb[30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Your Perfect Campus Space, Simplified</p>
        <p className='text-white text-sm text-light'>From lecture halls to creative studios, find and book the ideal campus venue for your next big event in seconds.</p>
        
        <a href='#types' className='bg-white flex items-center px-5 py-3 gap-2 rounded-4xl text-sm text-gray-500 m-auto md:m-0 hover:scale-110 transition-all duration-300'>
          Book Venue <img className='w-4' src="https://static.thenounproject.com/png/1053750-200.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Header