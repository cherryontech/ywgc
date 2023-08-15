import React from 'react'

function PreFooter () {
  return <div className='flex flex-col mr-auto justify-evenly gap-1 w-80 h-52 py-10 px-4 md:flex-row md:justify-between md:w-full md:h-44 md:py-16 md:px-24'>
    <div className='gap-1.5'>
      <h3 className='text-lg text-left font-bold  pr-10 md:pr-0 md:text-2xl md:font-semibold md:text-right'>Yorkshire Woods Ground Crew</h3>
      <p className='text-xs text-left font-bold md:text-sm md:font-regular text-stone-600 md:text-left'>Detroit&apos;s Finest Lawn Care</p>
    </div>
    <div className='pt-5 gap-1 md:pt-0'>
      <p className='text-sm text-left font-semibold md:block md:text-xl md:font-bold md:text-right'>Email today!</p>
      <p className='text-sm text-left font-bold  md:text-xl text-green-700 md:text-right'>info@yorkshirewoodsgroundcrew.com</p>
    </div>
  </div>
}

export default PreFooter
