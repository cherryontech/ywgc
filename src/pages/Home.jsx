import React from 'react'
import BaseHeading from '../components/BaseHeading'

function Home () {
  return (
    <div className="mx-3 mt-20 bg-white rounded-lg md:mt-40 md:mx-64 bg-opacity-60">
      <div className="flex flex-col items-center justify-center px-6 py-4">
        <BaseHeading level={1} text="Yorkshire Woods Ground Crew" />
        <p className="mt-4 text-xl font-body">
          Yorkshire Woods Grounds Crew is a Detroit local lawn care and landscaping business. We specialize in lawn-mowing and clean-outs. We handle residential, business, and government properties of all sizes. We&apos;re available for one-time and ongoing engagements.
        </p>
        <a
          href='tel:+123456789'
          className="bg-[#1B8341] text-center font-body border-white border-3 items-center rounded-full my-20 text-white font-bold text-lg w-full py-2 md:mt-16 md:w-1/2 hover:bg-green-600"
        >
          (123)-456-789
        </a>
      </div>
    </div>
  )
}

export default Home
