import React from 'react'

const Lifecycle = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <div>
        <h2 className="mb-3 text-3xl font-semibold text-center text-white md:text-4xl">How it works</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2  md:mb-2 bg-gray-400 border-0 rounded dark:bg-gray-700'></hr>
      </div>
      <ul className='flex flex-col my-12 md:flex-row md:my-12 md:mx-10'>
        <li className='relative md:flex md:flex-col md:ml-28 '>
          <div className='flex flex-row justify-start gap-4 md:flex-col'>
            <div className="z-10 flex items-center justify-center w-8 h-8 text-white bg-green-800 rounded-full ">
              <div>
                1
              </div>
            </div>
            <h4 className="text-xl font-semibold md:text-2xl md:ml-0">Plan</h4>
          </div>
          <div className="absolute hidden w-full h-1 bg-green-800 md:block top-4 "></div>
          <div className="absolute w-1 h-full bg-green-800 md:hidden left-4"></div>
          <div>
            <p className='px-12 mb-10 text-sm md:my-3 md:px-0'>Get in touch with us! Together we’ll figure out what kind of work you need done and the best date for it to happen.
            </p>
          </div>
        </li>

        <li className='relative md:flex md:flex-col'>
          <div className='flex flex-row gap-4 md:flex-col'>
            <div className="z-10 flex items-center justify-center w-8 h-8 text-white bg-green-800 rounded-full ">
              <div>
                2
              </div>
            </div>
            <h4 className="text-xl font-semibold md:text-2xl">Relax</h4>
          </div>
          <div className="absolute hidden w-full h-1 bg-green-800 md:block md:mx-2 top-4"></div>
          <div className="absolute w-1 h-full bg-green-800 md:hidden left-4"></div>
          <div>
            <p className='md:ml-0 mb-10 text-sm  px-12 md:mx-20 md:my-3 md:pl-0 md:pr-10'>We’ll do the work agreed, and provide before and after pictures of the work we do.</p>
          </div>
        </li>
        <li className='relative md:flex md:flex-col'>
          <div className='relative flex flex-row justify-start md:flex-col'>
            <div className='absolute z-10 p-1 bg-white border-4 border-green-800 rounded-full'>
              <div className="flex items-center justify-center w-8 h-8 text-white bg-green-800 rounded-full ">
                3
              </div>
            </div>
            <h4 className="text-xl font-semibold md:text-2xl pl-12 md:pl-0 md:mt-12">Settle Up</h4>
          </div>
          <div>
            <p className='md:ml-0 mb-10 text-sm px-12 mt-2 md:my-3 md:px-0'>We’ll send you the invoice with the agreed-upon amount.</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Lifecycle
