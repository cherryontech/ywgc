import React from 'react'
import PropTypes from 'prop-types'

const ServiceItem = (props) => {
  return (
    <div className='flex flex-col justify-items-center items-center md:flex-row md:px-24 md:pt-20 md:pb-0 gap-2.5'>
    <div className='mx-auto md:mr-8'>
      <img className='max-w-none' src={props.data.icon} alt={props.data.title} />
    </div>
    <div className='mb-4'>
      <h3 className='text-xl text-fjalla text-center md:text-left md:text-4xl'>{props.data.title}</h3>
      <p className='text-merriweather text-base text-xs py-2.5 px-8 md:text-2xl md:px-0'>{props.data.description}</p>
    </div>
    </div>
  )
}

ServiceItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default ServiceItem
