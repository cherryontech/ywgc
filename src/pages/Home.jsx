import React from 'react'

function Home () {
  return (
    <div className="mt-[86px] mx-[34px] md:mt-[160px] md:mx-[364px] bg-white bg-opacity-60 rounded-lg" role="region" aria-label="Business Information">
      <div className="pl-[32px] pr-[32px] flex flex-col justify-center items-center py-[16px]">
        <h1 className="text-[50px] md:text-[64px] text-center font-header font-bold" role="heading">Yorkshire Woods Ground Crew</h1>
        <p className="text-[24px] px-[38px] font-body" role="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.
        </p>
        <button className="bg-[#1B8341] font-body border-white border-3 items-center rounded-full my-[80px] text-white font-bold text-lg w-full py-2 md:mt-[60px] md:w-1/2 hover:bg-green-600" role="button"
          aria-label="Phone number">(123)-456-789</button>
      </div>
    </div>

  )
}

export default Home
