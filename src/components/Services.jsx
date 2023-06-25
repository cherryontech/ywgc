import React from 'react'
import { serviceData } from '../servicedata'

function Services () {
  return (
    <div className="flex flex-col w-full px-0 py-[94px] md:px-8 md:py-6">
      <h1 className="text-fjalla text-6xl mx-auto mb-6">Services</h1>
      <ul>
        {serviceData.map((service) => (
          <li className="flex flex-col md:flex-row mb-8 items-center" key={service.id}>
            <div className="mx-auto md:mr-8">
              <img className="max-w-none" src={service.icon} alt={service.title} />
            </div>
            <div>
              <h3 className="text-fjalla text-center md:text-left text-4xl mb-2">{service.title}</h3>
              <p className="text-merriweather text-xl">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
