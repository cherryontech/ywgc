import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-green-700 text-white text-center">
      <h1>Copyright © 2023 Yorkshire Woods Ground Crew. All rights reserved.</h1>
      <div>
        <p>Design: <a href="/">Amanda Karczewski</a></p>
        <p>Development: Jayna Issariya, Nurka Kereikhan</p>
        <p>Product Management: Allie Quintano</p>
      </div>
      <h1 className='text-center text-white'>Icons from &quot;Lawn Care&quot; collection, created by Berkah Icon, from <a className='underline' href='https://thenounproject.com/browse/collection-icon/lawn-care-163681/?p=1'>Noun Project</a> CC BY 3.0</h1>
    </div>
  )
}

export default Footer
