import React from 'react'
import BaseHeading from '../components/BaseHeading'
import { HashLink as Link } from 'react-router-hash-link'

function Home () {
  return (
    <div>
      {/* Mobile Version */}
      <div className='lg:hidden'>
        <div className='flex bg-white py-2.5'>
          <p className='font-semibold text-lg md:text-xl ml-auto mx-2'>
            Tap to call!
          </p>
          <p className='font-bold text-lg md:text-xl text-green-700 mx-2'>
            123.456.7890
          </p>
        </div>
        <div className="p-6 bg-white bg-[url('/public/images/hero.png')] bg-no-repeat bg-cover">
          <div className='flex flex-col items-center justify-center p-6 bg-white bg-opacity-80 rounded-2xl'>
            <div className='py-5 px-16 gap-2.5'>
              <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
              <hr className='w-[211px] h-px mx-auto mt-4 bg-black border-0 rounded'></hr>
            </div>
            <div>
              <div className='w-[358px] h-[80px] px-8'>
                <h2 className='font-bold text-center text-sm uppercase text-zinc-600 leading-5'>
                  Detroit&apos;s Finest Lawn Care
                </h2>
              </div>
            </div>
            <div className='gap-16'>
              <div className='flex flex-col italic text-base leading-normal font-light text-center mb-14 gap-2'>
                <h3 className=''>Personalized Service</h3>
                <h3 className=''>Jobs Of All Sizes</h3>
                <h3 className=''>Quality Guaranteed</h3>
              </div>
              <Link
                  to='#services-section'
                className='text-base md:text-lg text-white font-semibold'
                >
                <div className='flex items-center text-center justify-center md:text-xl bg-green-700 py-3 px-10 rounded-lg'>
                  Our Services
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* web version */}
      <div className='hidden lg:flex flex-row'>
      <div className='flex flex-row'>
        <img
          className='w-1/3'
          src='/images/hero.png'
          alt='Freshly mowed vibrant green grass showcasing immaculate grooming. In the foreground, beautiful flower bushes bloom with a variety of white, red, and pink flowers.'
        />
        <div className='w-full'>
          <div className='flex flex-row absolute right-0 top-0 pt-2'>
              <p className='font-semibold text-lg md:text-xl mr-4'>
              Call us today!
            </p>
              <p className='font-semibold text-lg md:text-xl text-green-700 mr-4'>
              123.456.7890
            </p>
          </div>
          <div className='flex flex-col mx-auto mt-18 py-36 text-center items-center'>
            <div className='mx-2'>
              <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
                <p className='font-bold text-center text-sm uppercase text-zinc-600 leading-5'>
                Detroit&apos;s Finest Lawn Care
              </p>
            </div>
              <div className='flex flex-row italic text-base leading-normal font-light lg:text-2xl mb-14 divide-x-2 divide-zinc-500'>
              <h3 className='px-2'>Personalized Service</h3>
              <h3 className='px-2'>Jobs Of All Sizes</h3>
              <h3 className='px-2'>Quality Guaranteed</h3>
            </div>
              <Link
                to='#services-section'
                className='text-base md:text-lg text-white font-semibold'
              >
            <div className='flex items-center text-center justify-center bg-green-700 p-2.5 gap-2.5 rounded-lg w-3/5 lg:w-[463px] lg:h-[85px]'>
                Our Services
            </div>
              </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
