import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Venues() {
  const { type } = useParams();
  const [filterVen, setFilterVen] = useState([]);
  const { venues } = useContext(AppContext)
  const navigate = useNavigate()

  const applyFilter = () => {
    if(type){
      setFilterVen(venues.filter(ven => ven.type === type))
    }else{
      setFilterVen(venues)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[venues,type]);

  return (
    <div>
      <p className='text-gray-600'>Browse through all the venue types.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='pt-5 flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> type === 'Classroom' ? navigate('/venues') : navigate('/venues/Classroom')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Classroom" ? "bg-indigo-100 text-black" : ""}`}>Classroom</p>
          <p onClick={()=> type === 'Laboratory' ? navigate('/venues') : navigate('/venues/Laboratory')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Laboratory" ? "bg-indigo-100 text-black" : ""}`}>Laboratory</p>
          <p onClick={()=> type === 'Auditorium' ? navigate('/venues') : navigate('/venues/Auditorium')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Auditorium" ? "bg-indigo-100 text-black" : ""}`}>Auditorium</p>
          <p onClick={()=> type === 'Open air stages' ? navigate('/venues') : navigate('/venues/Open air stages')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Open air stages" ? "bg-indigo-100 text-black" : ""}`}>Open air stages</p>
          <p onClick={()=> type === 'Sports Areas' ? navigate('/venues') : navigate('/venues/Sports Areas')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Sports Areas" ? "bg-indigo-100 text-black" : ""}`}>Sports Areas</p>
        </div>
        <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6 pt-5 px-3 sm:px-0'>
          {
            filterVen.map((item, index) => (
              <div onClick={() => navigate(`/booking/${item._id}`)} key={index} className='border border-gray-400 rounded-xl overflow-hidden cursor-pointer bg-base-100 shadow-sm hover:translate-y-[-10px] transition-all duration-500'>
                <figure>
                  <img className='' src={item.image} alt="" />
                </figure>
                <div className='p-5'>
                  {
                    item.availability
                      ? <div className='flex items-center gap-2 text-sm text-center'>
                        <p className='w-2 h-2 rounded-full bg-green-500'></p>
                        <p>Available</p>
                      </div>
                      : <div className='flex items-center gap-2 text-sm text-center'>
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
      </div>
    </div>
  )
}

export default Venues