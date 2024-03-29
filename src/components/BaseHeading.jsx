import React from 'react'
import PropTypes from 'prop-types'

const BaseHeading = ({ level, text }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className='text-3xl text-center font-bold tracking-tighter md:text-4xl'>
      {text}
    </HeadingTag>
  )
}

BaseHeading.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string
}

export default BaseHeading
