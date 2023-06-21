import React from 'react'
import BaseHeading from '../components/BaseHeading'

function Home () {
  return (
    <div className="mt-20 mx-3 md:mt-40 md:mx-64 bg-white bg-opacity-60 rounded-lg">
      <div className="px-6 flex flex-col justify-center items-center py-4">
        <BaseHeading level={1} text="Yorkshire Woods Ground Crew" />
        <p className="text-xl font-body mt-4">
          Yorkshire Woods Grounds Crew is a Detroit local lawn care and landscaping business. We specialize in lawn-mowing and clean-outs. We handle residential, business, and government properties of all sizes. We&apos;re available for one-time and ongoing engagements.
        </p>
        <a
          href='tel:+123456789'
          className="bg-[#1B8341] text-center font-body border-white border-3 items-center rounded-full my-20 text-white font-bold text-lg w-full py-2 md:mt-16 md:w-1/2 hover:bg-green-600"
          aria-label="(123)-456-789 Phone number"
        >
          (123)-456-789
        </a>
      </div>
    </div>

  )
}

export default Home
