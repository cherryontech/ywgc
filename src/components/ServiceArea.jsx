import React from 'react'

const ServiceArea = () => {
  return (
    <div className='bg-gray-100'>
      <div className='px-6 pt-10'>
        <h2 className='mb-3 text-5xl text-center md:text-6xl font-header'>Areas We Serve</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 mb-10 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700' />
        <p className='my-10 text-xl text-left'>We are proudly located in Detroit, Michigan. We service the <span className='font-bold'>Detroit, Highland Park, Hamtramck,</span> and <span className='font-bold'>metro Detroit </span>area. Unsure if we serve your location? <a href="mailto:info@yorkshirewoodsgroundcrew.com" className="underline">Send us an email</a>!
        </p>
      </div>
      <iframe src="https://www.google.com/maps/d/embed?mid=1DG3IBrt1W1CSnau3KX33eHbSTV1uHtU&ehbc=2E312F" className='w-full h-96' aria-label='Service Area Map'></iframe>
    </div>
  )
}

export default ServiceArea
