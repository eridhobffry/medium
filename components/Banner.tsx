import React from 'react'

const Banner = () => {
  return (
    <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is place to Write, Read and Connect
        </h1>
        <h2>
          It's easy and free to post your stories and share them with the world.
        </h2>
      </div>
      <img
        className="hidden h-44 md:inline-flex lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="logo"
      />
    </div>
  )
}

export default Banner
