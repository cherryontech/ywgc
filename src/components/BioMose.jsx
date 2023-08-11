import React from 'react'
import mose from '../../src/img/mose.png'
import map from '../../src/img/map.png'

const BioMose = () => {
  return (
    <div className="bg-slate-50">
      <div className="px-6 md:px-16 lg:px-24 pt-8 md:pt-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-center">About</h2>
        <hr className="w-[180px] md:w-[720px] h-px mx-auto mt-2 mb-10 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700" />
        <p className="py-8 md:py-12 text-sm">
          Owner, Mose Primus is a long-time resident of Eastside Detroit and is the president of the local neighborhood association. Through his volunteer and non-profit work, Mose works tirelessly to beautify his neighborhood, mitigate blight, and create a safe, welcoming space for all residents.
        </p>
      </div>
      {/* Show 'mose' image on desktop */}
      <img src={mose} alt="Mose Primus, the friendly owner of Yorkshire Woods Ground Crew, operating a lawn mower with a warm smile. He's driving the mower amidst lush flower bushes and vibrant, healthy green grass." className="w-full object-cover md:block hidden" />
      {/* Show 'map' image on mobile */}
      <img src={map} alt="Mose Primus, the friendly owner of Yorkshire Woods Ground Crew, operating a lawn mower with a warm smile. He's driving the mower amidst lush flower bushes and vibrant, healthy green grass." className="w-full object-cover md:hidden" />
    </div>
  )
}

export default BioMose
