import React from 'react'

function Home () {
  return (
    <div className="mt-20 mx-4 md:mt-40 md:mx-64 bg-white bg-opacity-60 rounded-lg" aria-label="Business Information">
      <div className="px-8 flex flex-col justify-center items-center py-4">
        <BaseHeading level={1} text="Yorkshire Woods Ground Crew" />
        <p className="text-[24px] font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.
        </p>
        <a
          href='tel:+123456789'
          className="bg-[#1B8341] text-center font-body border-white border-3 items-center rounded-full my-20 text-white font-bold text-lg w-full py-2 md:mt-16 md:w-1/2 hover:bg-green-600"
          aria-label="(123)-456-789 Phone number"
          onClick={() => { }}
        >
          (123)-456-789
        </a>
      </div>
    </div>

  )
}

export default Home
