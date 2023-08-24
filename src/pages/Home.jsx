import React from 'react'
import BaseHeading from '../components/BaseHeading'
import { HashLink as Link } from 'react-router-hash-link'

function Home() {
  return (
    <div>
      {/* Mobile Version */}
      <div className='lg:hidden'>
        <div className='flex justify-center text-center gap-2 bg-white py-8'>
          <p className='text-lg font-semibold text-center font-header'>
            Tap to
            <a href="mailto:info@yorkshirewoodsgroundcrew.com" className='ml-2 text-custom-color underline'>email</a>
            !
          </p>
        </div>
        <div className="p-6 bg-white bg-[url('/public/images/heromobile.png')] bg-no-repeat bg-cover">
          <div className='flex flex-col items-center justify-center p-6 bg-white bg-opacity-80 my-10'>
            <div>
              <div className='px-16 gap-2.5 pt-10'>
                <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
              </div>
              <div>
                <div className='px-8'>
                  <h2 className='font-bold text-center text-sm capitalize text-zinc-500'>
                    Detroit&apos;s Finest Lawn Care
                  </h2>
                </div>
              </div>
            </div>
            <div className='flex flex-col font-normal italic align-stretch text-base text-center mb-14 gap-2 my-10'>
              <h3 className=''>Personalized Service</h3>
              <h3 className=''>Jobs Of All Sizes</h3>
              <h3 className=''>Quality Guaranteed</h3>
            </div>
            <Link
              to='#services-section'
              className=' text-white font-bold pb-10'
            >
              <div className='flex h-10 px-20 items-center text-center justify-center bg-custom-color
              self-stretch rounded-full transition-all hover:text-custom-color hover:bg-transparent hover:border-solid hover:border-4 hover:border-custom-color'>
                Our Services
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* web version */}
      <div className='hidden lg:flex flex-row'>
        <img
          className='flex-2 flex-shrink-1 flex-grow-0 w-1/2'
          src='/images/hero.png'
          alt='Freshly mowed vibrant green grass showcasing immaculate grooming. In the foreground, beautiful flower bushes bloom with a variety of white, red, and pink flowers.'
        />
        <div className='flex-2 flex-shrink-1 flex-grow-0 w-1/2 md:px-24'>
          <div className="mx-auto my-4">
            <p className="text-xl font-semibold text-center font-header">Email today!</p>
            <a href="mailto:info@yorkshirewoodsgroundcrew.com" className='block text-xl font-bold text-center text-custom-color underline'>info@yorkshirewoodsgroundcrew.com</a>
          </div>
          <div className='flex flex-col mx-auto mt-18 py-36 md:my-28 justify-center text-center items-center'>
            <div className='mx-2'>
              <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
              <p className='pt-1 font-bold text-center text-sm capitalize align-stretch text-zinc-500'>
                Detroit&apos;s Finest Lawn Care
              </p>
            </div>

            <div className='flex flex-col font-normal text-lg md:text-xl lg:text-2xl mb-14 py-9 gap-2 divide-zinc-500'>
              <h3 className='px-2'>Personalized Service</h3>
              <h3 className='px-2'>Jobs Of All Sizes</h3>
              <h3 className='px-2'>Quality Guaranteed</h3>
            </div>
            <Link
              to='#services-section'
              className='text-2xl lg:text-3xl text-white font-bold'
            >
              <div className='flex h-16 md:px-20 items-center text-center justify-center bg-custom-color self-stretch rounded-full transition-all hover:text-custom-color hover:bg-transparent hover:border-solid hover:border-4 hover:border-custom-color'>
                Our Services
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
