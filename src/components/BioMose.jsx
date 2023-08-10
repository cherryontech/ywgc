import React from 'react'
import mose from '../../src/img/mose.png'
import map from '../../src/img/map.png'

const BioMose = () => {
  return (
    <div className="bg-slate-50 flex flex-col md:flex-row">
      {/* Show 'mose' image on desktop */}
      <img src={mose} alt="Mose Primus, the friendly owner of Yorkshire Woods Ground Crew, operating a lawn mower with a warm smile. He's driving the mower amidst lush flower bushes and vibrant, healthy green grass." className="object-cover md:block hidden flex-shrink-1 flex-grow-0 w-1/2" />
      {/* Show 'map' image on mobile */}
      <div className="px-6 lg:px-24 pt-8 md:flex-shrink-1 md:flex-grow-0 md:w-1/2 md:px-24 md:pt-20 md:pb-32">
        <h2 className="text-5xl md:text-6xl md:pb-20 mt-10  mb-16 font-header text-center">About</h2>
        <img src='../images/box.png' className='w-[100%] h-[200px] pt-15 object-contain md:pb-10' />
        <p className="py-8 md:py-12 text-lg md:text-xl md:my-10">
          Owner, Mose Primus is a long-time resident of Eastside Detroit and is the president of the local neighborhood association. Through his volunteer and non-profit work, Mose works tirelessly to beautify his neighborhood, mitigate blight, and create a safe, welcoming space for all residents.
        </p>
      </div>
      <img src={map} alt="Mose Primus, the friendly owner of Yorkshire Woods Ground Crew, operating a lawn mower with a warm smile. He's driving the mower amidst lush flower bushes and vibrant, healthy green grass." className="w-full object-cover md:hidden" />
    </div>
  )
}

export default BioMose
