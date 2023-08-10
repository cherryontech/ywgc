import React from 'react'

const Lifecycle = () => {
  return (
    <div className="px-4 py-8 flex justify-center items-center flex-col">
      <div>
        <h2 className="mb-3 text-center text-3xl md:text-4xl font-semibold text-white">How it works</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2  md:mb-2 bg-gray-400 border-0 rounded dark:bg-gray-700'></hr>
      </div>
      <ul className='flex flex-col md:flex-row md:my-12 md:mx-10 my-12'>
        <li className='relative md:flex md:flex-col md:ml-28 '>
          <div className='flex flex-row md:flex-col justify-start gap-4'>
            <div className=" flex items-center justify-center z-10 w-8 h-8 rounded-full bg-green-800 text-white">
              <div>
                1
              </div>
            </div>
            <h4 className="text-xl font-semibold md:text-2xl md:ml-0">Plan</h4>
          </div>
          <div className="hidden md:block absolute top-4 w-full h-1 bg-green-800 "></div>
          <div className="md:hidden absolute left-4 w-1 h-full bg-green-800"></div>
          <div>
            <p className='mb-10 px-12 text-sm md:my-3 md:px-0'>Get in touch with us! Together we’ll figure out what kind of work you need done and the best date for it to happen.</p>
          </div>
        </li>

        <li className='relative md:flex md:flex-col'>
          <div className='flex flex-row md:flex-col gap-4'>
            <div className=" flex z-10 items-center justify-center w-8 h-8 rounded-full bg-green-800 text-white">
              <div>
                2
              </div>
            </div>
            <h4 className="text-xl font-semibold md:text-2xl">Relax</h4>
          </div>
          <div className="hidden md:block absolute md:mx-2 w-full top-4 h-1 bg-green-800"></div>
          <div className="md:hidden absolute left-4 w-1 h-full bg-green-800"></div>
          <div>
            <p className='md:ml-0 mb-10 text-sm  px-12 md:mx-20 md:my-3 md:pl-0 md:pr-10'>We’ll do the work agreed, and provide before and after pictures of the work we do.</p>
          </div>
        </li>
        <li className='relative md:flex md:flex-col'>
          <div className='flex flex-row md:flex-col justify-start relative'>
            <div className='z-10 border-4 border-green-800 bg-white p-1 rounded-full absolute'>
              <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-green-800 text-white">
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
      <div className='flex mt-20 justify-center md:gap-2 text-center font-header flex-col md:flex-row'>
        <h2 className='text-20 md:text-3xl md:mt-1 font-normal leading-normal'>Get started today!</h2>
        <p className='text-green-800 text-3xl font-normal leading-normal'>123.456.7890</p>
      </div>
    </div>
  )
}

export default Lifecycle
