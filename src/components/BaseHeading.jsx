import React from 'react'
import PropTypes from 'prop-types'

const BaseHeading = ({ level, text }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className="text-[50px] md:text-[64px] text-center font-header font-bold">
      {text}
    </HeadingTag>
  )
}

BaseHeading.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string
}

export default BaseHeading
