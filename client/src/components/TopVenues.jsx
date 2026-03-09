import React from 'react'
import { venues } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


function TopVenues() {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center gap-5 text-gray-800 my-10'>
      <h1 className='text-2xl md:text-4xl font-medium'>Top Venues</h1>
      <p className='text-sm sm:w-1/3 text-center'>Book the most popular venues of your campus.</p>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6 pt-5 px-3 sm:px-0 '>
        {
          venues.slice(0,10).map((item,index)=>(
            <div onClick={()=>navigate(`/booking/${item._id}`)} key={index} className='border border-gray-400 rounded-xl overflow-hidden cursor-pointer bg-base-100 shadow-sm hover:translate-y-[-10px] transition-all duration-500'>
              <img className='' src={item.image} alt="" />
              <div className='p-5'>
                {
                  item.availability
                  ? <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                    <p>Available</p>
                  </div>
                  : <div className='flex items-center gap-2 text-sm text-center text-red-500'>
                    <p className='w-2 h-2 rounded-full bg-red-500'></p>
                    <p>Unavailable</p>
                  </div>
                }
                <h3 className=''>{item.name}</h3>
                <p>Capacity : {item.capacity}</p>
              </div>
            </div>
          ))
        }
      </div>
      <button onClick={()=>navigate('/venues')} className='cursor-pointer text-gray-800 px-5 py-2 text-xl rounded-3xl bg-gray-400 hover:scale-120 transition-all duration-300'>More</button>
    </div>
  )
}

export default TopVenues