import React from 'react'

const Lifecycle = () => {
  return (
    <div className="px-4 py-8">
      <div>
        <h2 className="text-xl md:text-6xl mb-3 font-header text-center ">How it works</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 mb-10 md:mb-2 bg-gray-400 border-0 rounded dark:bg-gray-700'></hr>
      </div>
      <ul className=" md:my-10 flex flex-col md:flex-row md:mx-60 justify-center">
        <li className="relative flex flex-col md:flex-row md:items-center md:space-x-2">
          <div className='z-10'>
            <div className="flex items-center justify-center w-8 h-8 rounded-full p-1 bg-green-800 text-white z-10">
              1
            </div>
            <div className='flex justify-center md:flex-col'>
              <h4 className="font-fjalla font-normal text-3xl text-gray-700">Plan</h4>
              <p>Get in touch with us! Together we’ll figure out what kind of work you need done and the best date for it to happen.</p>
            </div>
          </div>
          {/* The horizontal line for desktop */}
          <div className="hidden md:block absolute left-2 top-5 w-full h-1 bg-green-800"></div>
          {/* The vertical line for mobile */}
          <div className="md:hidden absolute left-6 top-11 w-1 h-full bg-green-800"></div>
        </li>

        <li className="relative flex flex-col md:flex-row md:items-center md:space-x-2">
          {/* The circle */}
          <div className='z-10'>
            <div className="flex items-center justify-center w-8 h-8 rounded-full p-1 bg-green-800 text-white z-10">
              2
            </div>
            <div>
              <h4 className="font-fjalla font-normal text-3xl text-gray-700">Relax</h4>
              <p>We’ll do the work agreed, and provide before and after pictures of the work we do.</p>
            </div>
          </div>
          {/* The horizontal line for desktop */}
          <div className="hidden md:block absolute left-2 top-5 w-full h-1 bg-green-800"></div>
          {/* The vertical line for mobile */}
          <div className="md:hidden absolute left-6 top-12 w-1 h-full bg-green-800">
          </div>
        </li>

        <li className="relative flex flex-col md:flex-row md:items-center md:space-x-2 ">
          <div>
            <div className='border-4 border-green-800 bg-white p-1 rounded-full z-10'>
              <div className="flex items-center justify-center w-8 h-8 rounded-full p-1 bg-green-800 text-white z-10">
                3
              </div>
            </div>
            <div>
              <h4 className="font-fjalla font-normal text-3xl text-gray-700">Settle Up</h4>
              <p>We’ll send you the invoice with the agreed-upon amount.</p>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <h2>Get started today!</h2>
        <p>123.456.7890</p>
      </div>
    </div>
  )
}

export default Lifecycle
