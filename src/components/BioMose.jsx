import React from 'react'
import mose from '../../src/img/mose.png'
import map from '../../src/img/map.png'

const BioMose = () => {
  return (
    <div className="bg-slate-50 flex flex-col md:flex-row">
      {/* Show 'mose' image on desktop */}
      <img src={mose} alt="Mose Primus, the friendly owner of Yorkshire Woods Ground Crew, operating a lawn mower with a warm smile. He's driving the mower amidst lush flower bushes and vibrant, healthy green grass." className="object-cover md:block hidden flex-shrink-1 flex-grow-0 w-1/2" />
      {/* Show 'map' image on mobile */}
      <div className="px-6 pt-10 md:flex-shrink-1 md:flex-grow-0 md:w-1/2 md:px-24">
        <h2 className="text-3xl pb-14 md:text-6xl md:py-14 font-semibold text-center">About</h2>
        <img src='../images/box.png' className='w-[100%] h-[200px] object-contain md:pb-8' alt="Canine detective, nature's expertise." />
        <p className="py-10 md:py-12 text-sm md:text-xl md:my-10 font-normal">
          Owner, Mose Primus is a long-time resident of Eastside Detroit and is the president of the local neighborhood association. Through his volunteer and non-profit work, Mose works tirelessly to beautify his neighborhood, mitigate blight, and create a safe, welcoming space for all residents.
        </p>
      </div>
      <img src={map} alt="Mose Primus, the friendly owner of Yorkshire Woods Ground Crew, operating a lawn mower with a warm smile. He's driving the mower amidst lush flower bushes and vibrant, healthy green grass." className="w-full object-cover md:hidden" />
    </div>
  )
}

export default BioMose
