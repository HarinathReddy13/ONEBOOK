import React from 'react'
import { typeData } from '../assets/assets'
import { Link } from 'react-router-dom'

function VenueType() {
  return (
    <div id='types' className='m-10 flex flex-col items-center gap-5 py-16 text-gray-800'>
      <h1 className='text-2xl md:text-3xl font-medium'>Find by venue types</h1>
      <p className='sm:w-1/3 text-center text-sm'>Browse through a list of types of venues and select the one which best suits your needs.</p>
      <div className='flex sm:justify-center gap-30 pt-10 w-full items-center overflow-scroll '>
        {
          typeData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center gap-3 text-xs flex-shrink-0 hover:translate-y-[-15px] transition-all duration-500' key={index} to={`/venues/${item.type}`}>
              <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
              <p>{item.type}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default VenueType