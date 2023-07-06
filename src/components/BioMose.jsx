import React from 'react'
import mose from '../../src/img/mose.png'

const BioMose = () => {
  return (
    <div className="bg-slate-50">
      <div className="px-6 md:px-16 lg:px-24 pt-8 md:pt-16">
        <h2 className="text-5xl md:text-6xl mb-3 text-center">About</h2>
        <hr className="mx-4 md:mx-20 bg-black" />
        <p className="py-8 md:py-12 text-lg md:text-xl">
          Owner, Mose Primus is a long-time resident of Eastside Detroit and is the president of the local neighborhood association. Through his volunteer and non-profit work, Mose works tirelessly to beautify his neighborhood, mitigate blight, and create a safe, welcoming space for all residents.
        </p>
      </div>
      <img src={mose} alt="its_me" className="w-full h-96 object-cover" />
    </div>
  )
}

export default BioMose
