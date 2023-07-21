import React from 'react'
import BaseHeading from '../components/BaseHeading'
import { HashLink as Link } from 'react-router-hash-link'
function Home () {
  return (
    <div className='flex flex-row'>
      <img
        className='w-1/3'
        src='/images/hero.png'
        alt='Freshly mowed vibrant green grass showcasing immaculate grooming. In the foreground, beautiful flower bushes bloom with a variety of white, red, and pink flowers.'
      />
      <div className='w-full'>
        <div className='flex flex-row absolute right-0 top-0 pt-2'>
          <p className='font-normal font-header text-4xl mr-4'>
            Call us today!
          </p>
          <p className='font-normal font-header text-4xl text-green-700 mr-4'>
            123.456.7890
          </p>
        </div>
        <div className='flex flex-col mx-auto mt-24 py-36 w-[953px] h-[344px] text-center items-center'>
          <div className='mx-2'>
            <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
            <p className='font-normal my-6 text-merriweather italic text-4xl text-zinc-500'>
              Detroit&apos;s Finest Lawn Care
            </p>
          </div>
          <h1 className='font-normal text-merriweather text-2xl mb-14'>
            Personalized Service | Jobs Of All Sizes | Quality Guaranteed
          </h1>
          <div className='flex items-center text-center justify-center bg-green-700 p-2.5 gap-2.5 rounded-lg w-[463px] h-[85px]'>
            <Link
              to='#services-section'
              className='text-merriweather text-3xl text-white font-bold'
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
