import React from 'react'
import { serviceData } from '../servicedata'

function Services () {
  return (
    <div className="flex flex-col w-full px-0 py-[94px] md:px-8 md:py-6 bg-white">
      <h2 className="mx-auto mb-6 text-6xl font-header">Services</h2>
      <ul>
        {serviceData.map((service) => (
          <li className="flex flex-col items-center mb-8 md:flex-row" key={service.id}>
            <div className="mx-auto md:mr-8">
              <img className="max-w-none" src={service.icon} alt={service.title} />
            </div>
            <div>
              <h3 className="mb-2 text-4xl text-center font-header md:text-left">{service.title}</h3>
              <p className="text-xl text-merriweather">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
