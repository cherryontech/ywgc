import React from 'react'

const ServiceArea = () => {
  return (
    <div className='bg-gray-100'>
      <div className='px-6 pt-10'>
        <h2 className='text-center mb-3 text-3xl md:text-4xl font-semibold'>Areas We Serve</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 mb-10 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700' />
        <p className='text-sm font-normal my-10 text-left'>We are proudly located in Detroit, Michigan. We service the Detroit, Highland Park, Hamtramck, and metro Detroit area. Unsure if we serve your location? Give us a call!
        </p>
      </div>
      <iframe src="https://www.google.com/maps/d/embed?mid=1DG3IBrt1W1CSnau3KX33eHbSTV1uHtU&ehbc=2E312F" className='w-full h-96' aria-label='Service Area Map'></iframe>
    </div>
  )
}

export default ServiceArea
