import React from 'react'
import BaseHeading from '../components/BaseHeading'
import { HashLink as Link } from 'react-router-hash-link'

function Home () {
  return (
    <div>
      {/* Mobile Version */}
      <div className='lg:hidden'>
        <div className='flex bg-white py-2.5'>
          <p className='mx-auto my-8 text-lg font-semibold'>
            Tap to
            <a href="mailto:info@yorkshirewoodsgroundcrew.com" className='ml-2 text-xl text-green-700 underline font-header'>email</a>
            !
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
                <h2 className='text-sm font-bold leading-5 text-center text-zinc-600'>
                  Detroit&apos;s Finest Lawn Care
                </h2>
              </div>
            </div>
            <div className='gap-16'>
              <div className='flex flex-col gap-2 text-xl font-normal text-center mb-14'>
                <h3 className=''>Personalized Service</h3>
                <h3 className=''>Jobs Of All Sizes</h3>
                <h3 className=''>Quality Guaranteed</h3>
              </div>
              <Link
                  to='#services-section'
                  className='text-2xl font-bold text-white'
                >
              <div className='flex items-center justify-center px-10 py-3 text-center bg-green-700 rounded-lg'>
                  Our Services
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* web version */}
      <div className='flex-row hidden lg:flex'>
      <div className='flex flex-row'>
        <img
          className='w-1/3'
          src='/images/hero.png'
          alt='Freshly mowed vibrant green grass showcasing immaculate grooming. In the foreground, beautiful flower bushes bloom with a variety of white, red, and pink flowers.'
        />
        <div className='w-full'>
          <div className='absolute top-0 right-0 flex flex-row pt-2'>
            <a href="mailto:info@yorkshirewoodsgroundcrew.com" className='mr-4 text-4xl font-normal text-green-700 underline font-header'>
              Email us today!
            </a>
          </div>
          <div className='flex flex-col items-center mx-auto text-center mt-18 py-36'>
            <div className='mx-2'>
              <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
                <p className='text-sm font-bold leading-5 text-center uppercase text-zinc-600'>
                Detroit&apos;s Finest Lawn Care
              </p>
            </div>
              <div className='flex flex-row text-base italic font-light leading-normal divide-x-2 lg:text-2xl mb-14 divide-zinc-500'>
              <h3 className='px-2'>Personalized Service</h3>
              <h3 className='px-2'>Jobs Of All Sizes</h3>
              <h3 className='px-2'>Quality Guaranteed</h3>
            </div>
              <Link
                to='#services-section'
                className='text-lg font-semibold text-white md:text-xl'
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
