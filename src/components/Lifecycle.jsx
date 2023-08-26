import React from 'react'
import { lifecycleData } from '../lifecycledata'
import LifecycleItem from './LifecycleItem'

const Lifecycle = () => {
  return (
    <div className="flex flex-col md:px-24 md:pt-14 md:pb-28 pb-16 pt-10 px-4 bg-custom-color">
      <div className="flex items-center px-4">
        <div className="flex-grow border-t-2 border-white"></div>
        <h2 className="mx-auto relative text-3xl md:text-4xl font-semibold text-white px-4">How it works
        </h2>
        <div className="flex-grow border-t-2 border-white"></div>
      </div>
      <ul className='flex flex-col md:flex-row md:mt-16 mt-14 gap-8 md:gap-5'>
        {lifecycleData.map((data) => (
          <li className='md:w-[550px]' key={data.id}>
            <LifecycleItem data={data} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lifecycle
