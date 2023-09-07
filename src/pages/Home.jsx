import React from 'react'
import BaseHeading from '../components/BaseHeading'
import { HashLink as Link } from 'react-router-hash-link'

function Home () {
  return (
    <div>
      {/* Mobile Version */}
      <div className='lg:hidden'>
        <div className='flex justify-center gap-2 py-8 text-center bg-white'>
          <p className='text-lg font-semibold text-center'>
            Tap to
            <a href="mailto:info@yorkshirewoodsgroundcrew.com" className='ml-2 underline text-brand-primary'>email</a>
            !
          </p>
        </div>
        <div className="p-6 bg-white bg-[url('/public/images/heromobile.png')] bg-no-repeat bg-cover">
          <div className='flex flex-col items-center justify-center p-6 my-10 bg-white bg-opacity-80'>
            <div>
              <div className='px-16 gap-2.5 pt-10'>
                <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
              </div>
              <div>
                <div className='px-8'>
                  <h2 className='text-sm font-bold text-center capitalize text-zinc-500'>
                    Detroit&apos;s Finest Lawn Care
                  </h2>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 my-10 text-base italic font-normal text-center align-stretch mb-14'>
              <h3 className=''>Personalized Service</h3>
              <h3 className=''>Jobs Of All Sizes</h3>
              <h3 className=''>Quality Guaranteed</h3>
            </div>
            <Link
              to='#services-section'
              className='w-full mb-10 font-bold text-white'
            >
              <div className='flex items-center self-stretch justify-center text-lg transition-all rounded-full center text- bg-brand-primary hover:text-brand-primary hover:bg-transparent hover:border-solid hover:border-4 hover:border-brand-primary'>
                Our Services
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* web version */}
      <div className='flex-row hidden lg:flex'>
        <img
          className='flex-grow-0 w-1/2 flex-2 flex-shrink-1'
          src='/images/hero.png'
          alt='Freshly mowed vibrant green grass showcasing immaculate grooming. In the foreground, beautiful flower bushes bloom with a variety of white, red, and pink flowers.'
        />
        <div className='flex-grow-0 w-1/2 flex-2 flex-shrink-1 md:px-24'>
          <div className="mx-auto my-4">
            <p className="text-xl font-semibold text-center font-header">Email today!</p>
            <a href="mailto:info@yorkshirewoodsgroundcrew.com" className='block text-xl font-bold text-center underline text-brand-primary'>info@yorkshirewoodsgroundcrew.com</a>
          </div>
          <div className='flex flex-col items-center justify-center mx-auto text-center mt-18 py-36 md:my-28'>
            <div className='mx-2'>
              <BaseHeading level={1} text='Yorkshire Woods Ground Crew' />
              <p className='pt-1 text-sm font-bold text-center capitalize align-stretch text-zinc-500'>
                Detroit&apos;s Finest Lawn Care
              </p>
            </div>

            <div className='flex flex-col gap-2 text-lg font-normal md:text-xl lg:text-2xl mb-14 py-9 divide-zinc-500'>
              <h3 className='px-2'>Personalized Service</h3>
              <h3 className='px-2'>Jobs Of All Sizes</h3>
              <h3 className='px-2'>Quality Guaranteed</h3>
            </div>
            <Link
              to='#services-section'
              className='text-lg font-bold text-white lg:text-xl'
            >
              <div className='flex items-center self-stretch justify-center h-16 text-center transition-all rounded-full md:px-20 bg-brand-primary hover:text-brand-primary hover:bg-transparent hover:border-solid hover:border-4 hover:border-brand-primary'>
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
