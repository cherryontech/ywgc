import React from 'react'
import { serviceData } from '../servicedata'
import './services.css'

function Services () {
  return (
    <div className='flex flex-col w-full px-0 py-[94px] md:px-8 md:py-6'>
        <h1 className='services mx-auto mb-6'>Services</h1>
        {serviceData.map((service) => (
            <div className="flex flex-col md:flex-row mb-8 items-center" key={service.id}>
              <div className='mx-auto md:mr-8'>
                <img className='max-w-none' src={service.icon} alt={service.title} />
              </div>
              <div>
                <h3 className='service-title text-center md:text-left'>{service.title}</h3>
                <p className='service-description'>{service.description}</p>
              </div>
            </div>
        ))}
    </div>
  )
}
export default Services
