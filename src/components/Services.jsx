import React from 'react'
import { serviceData } from '../servicedata'
import './services.css'

function Services () {
  return (
    <div className='services-wrapper'>
        <h1 className='services'>Services</h1>
        {serviceData.map((service) => (
            <div className="service-container" key={service.id}>
                <h3 className='service-title'>{service.title}</h3>
                <p className='service-description'>{service.description}</p>
            </div>
        ))}
    </div>
  )
}
export default Services