import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='text-gray-700'>
      <div className='text-center text-3xl '>
        ABOUT
        <span className=' pl-3 text-gray-800'>US</span>
      </div>

      <div className='mt-5 flex gap-5 items-center justify-around w-full flex-wrap'>
        <img className='w-1/3 rounded-2xl min-w-70' src={assets.VNR} alt="" />
        <div className='flex w-1/3 font-light  text-justify flex-col items-baseline gap-5 min-w-70'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis exercitationem nesciunt quas laboriosam dignissimos similique est tenetur voluptate. Repellat blanditiis hic excepturi ex animi sint, ea cumque quo nihil ad.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis eos voluptatibus natus, culpa doloribus hic expedita sit? Aspernatur cumque excepturi ut magni placeat saepe.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis delectus maiores, dolor animi laborum voluptatum a accusamus tempora magni, perspiciatis eos illum dicta facere cum, eum ad neque ullam laboriosam!</p>
        </div>
      </div>

      <div className='mt-10 mb-20 text-gray-700'>
        <p className='ml-5 text-2xl'>WHY <span className='pl-1 text-gray-800 font-medium'>CHOOSE US</span></p>

        <div className='flex gap-0 w-full mx-7 items-center mt-5 flex-wrap'>
          <div className='w-1/3 p-10 border border-gray-500 hover:bg-gray-600 hover:text-white transition-all duration-200 min-w-70'>
            <p className='font-medium pb-3'>
              EFFICIENCY
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, incidunt!
            </p>
          </div>
          <div className='w-1/3 p-10 border border-gray-500 hover:bg-gray-600 hover:text-white transition-all duration-200 min-w-70'>
            <p className='font-medium  pb-3'>
              CONVENIENCE
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, vero.
            </p>
          </div>
          <div className='w-1/3 p-10 border border-gray-500 hover:bg-gray-600 hover:text-white transition-all duration-200 min-w-70'>
            <p className='font-medium pb-3'>
              PERSONALIZATION
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, exercitationem?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About