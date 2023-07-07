import React from 'react'
import PropTypes from 'prop-types'

const BaseHeading = ({ level, text }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className="text-4xl font-header text-center md:text-6xl">
      {text}
    </HeadingTag>
  )
}

BaseHeading.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string
}

export default BaseHeading