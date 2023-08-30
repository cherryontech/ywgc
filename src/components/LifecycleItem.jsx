import React from 'react'
import PropTypes from 'prop-types'

const LifecycleItem = (props) => {
  return (
    <div className='flex relative bg-white flex-col justify-center items-center px-4 py-8 rounded-3xl text-base'>
      <img className='max-w-none absolute -top-12 hidden md:block' src={props.data.icon} alt="" />
      <img className='max-w-none absolute -top-2 md:hidden block' src={props.data.iconMobile} alt="" />
      <h3 className='text-xl py-4 font-semibold md:text-2xl text-center md:text-left'>{props.data.title}</h3>
      <p className='text-sm font-normal self-stretch'>{props.data.description}</p>
    </div>
  )
}

LifecycleItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    iconMobile: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default LifecycleItem
