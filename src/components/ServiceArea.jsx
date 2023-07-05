import React from 'react'

const ServiceArea = () => {
  return (
    <div className='bg-gray-100'>
      <div className='px-6 pt-10'>
        <h2 className='text-center mb-3 text-5xl md:text-6xl'>Areas We Serve</h2>
        <hr className='mx-10 bg-black' />
        <p className='text-xl my-10 md:text-center'>We are proudly located in Detroit, Michigan. We service the <span className='font-bold'>Detroit, Highland Park, Hamtramck,</span> and <span className='font-bold'>metro<br /> Detroit </span>area. Unsure if we serve your location? Give us a call!
        </p>
      </div>
      <iframe src="https://www.google.com/maps/d/embed?mid=1DG3IBrt1W1CSnau3KX33eHbSTV1uHtU&ehbc=2E312F" className='w-full h-96' aria-label='Service Area Map'></iframe>
    </div>
  )
}

export default ServiceArea
