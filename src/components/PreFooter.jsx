import React from 'react'

function PreFooter () {
  return <div className='flex bg-gray-100 flex-col gap-5 px-4 py-10 justify-evenly md:px-24 md:py-16 md:flex-row md:gap-10'>
    <h3 className="sr-only">Contact</h3>
    <p className="flex flex-col gap-1">
      <span className='text-lg font-bold lg:text-2xl'>Yorkshire Woods Ground Crew</span>
      <span className='text-xs font-bold text-stone-600 lg:text-sm'>Detroit&apos;s Finest Lawn Care</span>
    </p>
    <p className='flex flex-col gap-1'>
      <span className='text-sm font-semibold lg:text-xl lg:text-right'>Email today!</span>
      <span className='text-sm font-bold text-custom-color break-all lg:text-xl'>info@yorkshirewoodsgroundcrew.com</span>
    </p>
  </div>
}

export default PreFooter
