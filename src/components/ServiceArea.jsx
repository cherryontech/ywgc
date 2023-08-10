import React from 'react'

const ServiceArea = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='pt-10 md:flex-2 md:flex-shrink-1 md:flex-grow-0 md:w-1/2 justify-center items-center md:px-24 md:pt-16 md:pb-32'>
        <h2 className='text-center mb-3 text-5xl md:text-6xl font-header'>Where We Serve</h2>
        <img src='../images/dog.png' className='w-[100%] h-[200px] object-contain pt-16 mb-5 md:pt-10' />
        <div className='text-sm md:mt-10 flex flex-col md:justify-between'>
          <p className='mb-10 md:my-10 px-6 md:px-0'>We are proudly located in Detroit, Michigan. We service the Detroit, Highland Park, Hamtramck, and metro Detroit area.
          </p>
          <iframe src="https://www.google.com/maps/d/embed?mid=1DG3IBrt1W1CSnau3KX33eHbSTV1uHtU&ehbc=2E312F" className='md:hidden px-0 h-[263px]' aria-label='Service Area Map'></iframe>
          <p className='pt-10 md:pt-0 text-center md:text-start'>Unsure if we service your area?</p>
        </div>
        <div className='flex md:gap-2 flex-row pb-16 md:text-start text-xl md:2xl font-semibold pl-14 md:pl-0 md:mt-2'>
          <h2>Call us today!</h2>
          <p className='text-green-800'>123.456.7890</p>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/d/embed?mid=1DG3IBrt1W1CSnau3KX33eHbSTV1uHtU&ehbc=2E312F" className='md:block hidden md:flex-2 md:flex-shrink-1 md:flex-grow-0 md:w-1/2' aria-label='Service Area Map'></iframe>
    </div>
  )
}

export default ServiceArea
