import React from 'react'

const Footer = () => {
  return (
    <div className="bg-green-700 text-white text-center py-14 text-base md:text-xl px-6">
      <h1>Copyright © 2023 Yorkshire Woods Ground Crew. All rights reserved.</h1>
      <div className='py-8'>
        <p>Design: <a className='underline' href="https://www.linkedin.com/in/amanda-karczewski/">Amanda Karczewski</a></p>
        <p>Development: <a className='underline' href="https://github.com/jaynaxissa">Jayna Issariya</a>, <a className='underline' href="https://github.com/NurkaAmre">Nurka Kereikhan</a></p>
        <p>Product Management: <a className='underline' href="https://github.com/alliequintano">Allie Quintano</a></p>
      </div>
      <h1 className='text-center text-white'>Icons from &quot;Lawn Care&quot; collection, created by Berkah Icon, from <a className='underline' href='https://thenounproject.com/browse/collection-icon/lawn-care-163681/?p=1'>Noun Project</a> CC BY 3.0</h1>
    </div>
  )
}

export default Footer
