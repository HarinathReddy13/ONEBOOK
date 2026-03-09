import React from 'react'
import { useNavigate } from 'react-router-dom'

function Banner() {
  const navigate = useNavigate();
  return (
    <div className=' p-10 m-10 flex gap-20 bg-gray-300 rounded-lg items-center justify-around'>
      {/* left side */}
      <div className='flex-1 py-8 md:py-20 lg:pl-5'>
        <div className='text-4xl font-bold text-black'>
           <p >Start Booking</p>
           <p >Best Venues Of Campus</p>
        </div>
        <button onClick={()=>{navigate('/login'),scrollTo(0,0)}} className='mt-5 px-5 py-3 text-sm bg-white rounded-3xl cursor-pointer hover:scale-120 transition-all duration-300'>Create Account</button>
      </div>
      {/* right side */}
      <div className='hidden md:block md:w-1/2 lg:w-92.5 relative'>
        <img className='w-full bottom-0 right-0 max-w-md' src="https://content3.jdmagicbox.com/v2/comp/bangalore/c8/080pxx80.xx80.220309002345.a5c8/catalogue/g-m-party-hall-jnana-ganga-nagar-bangalore-convention-halls-WLm7rd6SJE.jpg" alt="" />
      </div>
    </div>
  )
}


export default Banner