import React from 'react'
import PropTypes from 'prop-types'

const ServiceItem = ({ service }) => {
  return (
    <li className="flex flex-col md:flex-row mb-8 items-center">
      <div className="mx-auto md:mr-8">
        <img className="max-w-none" src={service.icon} alt={service.title} />
      </div>
      <div>
        <h3 className="service-title text-center md:text-left">{service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>
    </li>
  )
}

ServiceItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default ServiceItem
