import React from 'react'

const Footer = () => {
  return (
    <div className="bg-brand-primary text-white font-light md:py-16 py-10 text-sm px-4 md:px-24">
      <p>Copyright © 2023 Yorkshire Woods Ground Crew. All rights reserved.</p>
      <div className='py-4'>
        <p>Design: <a className='underline' href="https://www.linkedin.com/in/amanda-karczewski/">Amanda Karczewski</a></p>
        <p>Development: <a className='underline' href="https://github.com/jaynaxissa">Jayna Issariya</a>, <a className='underline' href="https://github.com/NurkaAmre">Nurka Kereikhan</a></p>
        <p>Product Management: <a className='underline' href="https://github.com/alliequintano">Allie Quintano</a></p>
      </div>
      <p>Illustrations by Tyler Nickell, @tylrnckll</p>
      <p className=' text-white'>Icons from &quot;Lawn Care&quot; collection, created by Berkah Icon, from <a className='underline' href='https://thenounproject.com/browse/collection-icon/lawn-care-163681/?p=1'>Noun Project</a> CC BY 3.0</p>
    </div>
  )
}

export default Footer
