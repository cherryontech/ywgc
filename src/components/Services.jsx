import React from 'react'
import { serviceData } from '../servicedata'
import ServiceItem from './ServiceItem'

function Services () {
  return (
    <div className="flex flex-col md:px-24 md:pt-14 md:pb-28 pb-16 pt-10 px-4 bg-brand-primary">
      <div className="flex items-center px-4">
        <div className="flex-grow border-t-2 border-white"></div>
        <h2 className="mx-auto relative text-3xl md:text-4xl font-semibold text-white px-4">Services
        </h2>
        <div className="flex-grow border-t-2 border-white"></div>
      </div>
      <ul className='flex flex-col md:flex-row mt-14 gap-5'>
      {serviceData.map((data) => (
        <li className='' key={data.id}>
        <ServiceItem data={data} />
        </li>
      ))}
      </ul>
   </div>
  )
}

export default Services
