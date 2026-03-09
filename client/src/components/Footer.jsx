import React from 'react'

function Footer() {
  return (
    <div>
      <div className='flex gap-3 items-baseline justify-between p-10'>
        {/* Left side */}
        <div className='w-150 flex flex-col gap-5'>
          <div className='cursor-pointer'>
            <a className='text-3xl font-extrabold' href="/">ONE BOOK</a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam maiores consequatur recusandae doloribus, quos minus in veritatis, consectetur ex quo quae mollitia deserunt labore doloremque itaque, praesentium rem? Odio dolorum consequuntur dolor non laboriosam eum omnis nam? Maxime blanditiis culpa animi consequatur commodi optio. Sunt minus quisquam quos voluptatibus.</p>
        </div>
        {/* Center side */}
        <div className='flex flex-col gap-5'>
          <p className='text-2xl font-medium'>Company</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right side */}
        <div className='flex flex-col gap-5'>
          <p className='text-2xl font-medium'>Get in touch</p>
          <ul>
            <li>7396645410</li>
            <li>10b.harinathreddy@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-3 p-5'>
        <hr />
        <p className='text-sm text-center'>All copyrights reserved</p>
      </div>
    </div>
  )
}

export default Footer