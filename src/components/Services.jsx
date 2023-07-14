import React from 'react'
import { serviceData } from '../servicedata'
import ServiceItem from './ServiceItem'

function Services () {
  return (
   <div className="flex flex-col w-full md:py-24 py-6">
     <h2 className="mx-auto text-4xl md:text-6xl text-fjalla">Services</h2>
     <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 mb-10 md:mb-2 bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
    <ul className=''>
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
