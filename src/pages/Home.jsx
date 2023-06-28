import React from 'react'
import BaseHeading from '../components/BaseHeading'

function Home () {
  return (
    <div className="p-6 bg-white bg-opacity-60 bg-[url('/public/lawncare-bg.jpeg')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center p-6 mt-24 bg-white rounded-2xl">
        <BaseHeading level={1} text="Yorkshire Woods Ground Crew" />
        <p className="mt-4 text-xl font-body">
          Yorkshire Woods Grounds Crew is a Detroit local lawn care and landscaping business. We specialize in lawn-mowing and clean-outs. We handle residential, business, and government properties of all sizes. We&apos;re available for one-time and ongoing engagements.
        </p>
        <a
          href='tel:+123456789'
          className="items-center w-full p-2 my-20 text-lg font-bold text-center text-white bg-green-700 rounded-lg font-body md:mt-16 hover:bg-green-600"
        >
          (123)-456-789
        </a>
      </div>
    </div>
  )
}

export default Home
