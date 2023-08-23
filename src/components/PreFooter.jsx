import React from 'react'

function PreFooter () {
  return <div className='flex flex-col gap-5 mx-4 my-10 justify-evenly lg:mx-24 lg:my-16 lg:flex-row lg:gap-10'>
    <h3 className="sr-only">Contact</h3>
    <p className="flex flex-col gap-1">
      <span className='text-lg font-bold lg:text-2xl'>Yorkshire Woods Ground Crew</span>
      <span className='text-xs font-bold text-stone-600 lg:text-sm'>Detroit&apos;s Finest Lawn Care</span>
    </p>
    <p className='flex flex-col gap-1'>
      <span className='text-sm font-semibold lg:text-xl lg:text-right'>Email today!</span>
      <span className='text-sm font-bold text-green-700 break-all lg:text-xl'>info@yorkshirewoodsgroundcrew.com</span>
    </p>
  </div>
}

export default PreFooter
