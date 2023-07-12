import React from 'react'
import { serviceData } from '../servicedata'
import ServiceItem from './ServiceItem'

function Services () {
  return (
   <div className="flex flex-col w-full md:py-24 py-6">
     <h2 className="mx-auto mb-6 text-4xl md:text-6xl text-fjalla">Services</h2>
    <ul className=''>
      <li className=''>
      {serviceData.map((data) => (
        <ServiceItem key={data.id} data={data} />
      ))}
      </li>
      </ul>
   </div>
  )
}

export default Services
