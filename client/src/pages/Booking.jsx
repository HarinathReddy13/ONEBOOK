import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import  RelatedVenues  from '../components/RelatedVenues';

function Booking() {
  const { venueId } = useParams();
  const { venues } = useContext(AppContext)

  const [venInfo, setVenInfo] = useState(null)

  const days =['SUN','MON','TUE','WED','THU','FRI','SAT']
  const [venSlots,setVenSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')

  const fetchVenInfo = async () => {
    const venInfo = venues.find(ven => ven._id == venueId)
    setVenInfo(venInfo)
    // console.log(venInfo)
    // console.log(venues,venueId)
  }

  useEffect(() => {
    fetchVenInfo()
  }, [venues, venueId])

  const getAvailableSlots = async () => {
    setVenSlots([])

    let today = new Date()

    for(let i=0; i<7; i++){
      let currDate= new Date()
      currDate.setDate(today.getDate()+i)

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(17,0,0,0)

      if(today.getDate() === currDate.getDate()){
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours()+1 : 10)
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
      }else{
        currDate.setHours(10)
        currDate.setMinutes(0)
      }

      let timeSlots = []

      while(currDate<endTime){
        let formattedTime = currDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        timeSlots.push({
          datetime : new Date(currDate),
          time : formattedTime
        })

        currDate.setMinutes(currDate.getMinutes()+60)
      }

      setVenSlots(prev=>[...prev,timeSlots])
    }
  }

  useEffect(()=>{
    getAvailableSlots()
  },[venInfo])

  // useEffect(()=>{
  //   // console.log(venueId)
  // },[venSlots])

  return venInfo && (
    <div>
      {/* Venue Info */}
      <div className='flex flex-col sm:flex-row gap-4 '>
        <div>
          <img className='w-full sm:max-w-72 rounded-lg' src={venInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <div className='flex gap-4 items-center '>
            <p className='text-3xl font-medium text-gray-900'>{venInfo.name}</p>
            <button className='py-0.5 px-1 bg-gray-400  shadow-2xl text-white rounded-full text-sm'>{venInfo.type}</button>
          </div>
          <div>
            <p className='flex text-xl items-ceter gap-2 font-medium mt-3 text-gray-900'>
              About 
              <img className='w-4' src={assets.info_icon} alt="" />
            </p>
            <p className='text-gray-800 mt-3 max-w-[700px]'>{venInfo.about}</p>
          </div>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex overflow-x-scroll gap-3 w-full items-center mt-4'>
          {
            venSlots.length > 0 && venSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 cursor-pointer rounded-full text-gray-900 duration-200 transition-all ${slotIndex === index ? "bg-gray-400 text-white" : "border border-gray-200"}`} key={index}>
                <p>{item[0] && days[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 overflow-x-scroll w-full mt-5'>
          {
            venSlots.length > 0 && venSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 text-gray-900 duration-200 transition-all rounded-full cursor-pointer ${slotTime === item.time? "bg-gray-400 text-white" : "border border-gray-200"}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>

        <button className='px-15 py-3 rounded-full bg-gray-400 text-white text-sm font-light my-6'>Book the slot</button>
      </div>

      {/* Related Venues */}
      <RelatedVenues venueId={venueId} type={venInfo.type}/>
    </div>
  )
}

export default Booking