import React from 'react'

function PreFooter () {
  return <div className='flex flex-col mx-auto justify-evenly gap-1 w-80 h-52 py-10 px-4 md:flex-row md:justify-between md:w-full md:h-44 md:py-16 md:px-24'>
    <div className='gap-1.5'>
      <h3 className='text-lg text-left font-bold md:text-2xl md:font-semibold md:text-right'>Yorkshire Woods Groud Crew</h3>
      <p className='text-xs text-left font-bold md:text-sm md:font-regular text-stone-600 md:text-left'>Detroit&apos;s Finest Lawn Care</p>
    </div>
    <div className='pt-5 gap-1 md:pt-0'>
      <p className='hidden text-sm font-semibold md:block md:text-xl md:font-bold text-right'>Get Started today!</p>
      <p className='text-sm text-left font-semibold md:hidden'>Reach out today!</p>
      <p className='text-sm text-left font-bold  md:text-xl text-green-700 md:text-right'>info@yorkshirewoodsgroundcrew.com</p>
    </div>
  </div>
}

export default PreFooter
