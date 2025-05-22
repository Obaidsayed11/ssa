import React from 'react'
import fac5 from '../assets/fac5.png'
import fac1 from '../assets/fac1.jpg'
import fac2 from '../assets/fac2.jpg'
import fac3 from '../assets/fac3.jpg'


const Facilities = () => {
  return (
    <div className='relative' ><section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-16 px-6 md:px-20">
   <img
    src={fac5}
    alt="Facilities Artwork"
    className="absolute top-0 right-0 h-full object-contain pointer-events-none select-none mt-20"
  />

  <div className="mb-10 relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold">
      Facilities<span className="text-lime-400">•</span>
    </h2>
    <p className="mt-2 text-sm md:text-base text-gray-100 max-w-md">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>
  </div>

   <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
    <div className="space-y-3">
      <div className="relative">
        <img src={fac1} alt="Tennis" className="rounded-lg w-full h-64 object-cover" />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-70 w-12 h-12 rounded-full flex items-center justify-center text-black text-xl font-bold">▶</div>
        </button>
      </div>
      <h3 className="text-xl font-bold">Tennis</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-white text-black text-xs px-3 py-1 rounded-full">9 Clay Courts</span>
        <span className="bg-white text-black text-xs px-3 py-1 rounded-full">4 Hard Courts</span>
      </div>
      <p className="text-sm text-gray-200">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>

    <div className="space-y-3">
      <div className="relative">
        <img src={fac2} alt="Accommodation" className="rounded-lg w-full h-64 object-cover" />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-70 w-12 h-12 rounded-full flex items-center justify-center text-black text-xl font-bold">▶</div>
        </button>
      </div>
      <h3 className="text-xl font-bold">Accommodation</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-white text-black text-xs px-3 py-1 rounded-full">5 Star Hotel</span>
      </div>
      <p className="text-sm text-gray-200">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>

    <div className="space-y-3">
      <div className="relative">
        <img src={fac3} alt="Fitness" className="rounded-lg w-full h-64 object-cover" />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-70 w-12 h-12 rounded-full flex items-center justify-center text-black text-xl font-bold">▶</div>
        </button>
      </div>
      <h3 className="text-xl font-bold text-white">Fitness</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-lime-500 text-white text-xs px-3 py-1 rounded-full">Gym</span>
        <span className="bg-lime-500 text-white text-xs px-3 py-1 rounded-full">Fitness Room</span>
      </div>
      <p className="text-sm text-gray-200">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>

    <div className="space-y-3">
      <div className="relative">
        <img src="../src/assets/fac4.jpg" alt="Recovery" className="rounded-lg w-full h-64 object-cover" />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-70 w-12 h-12 rounded-full flex items-center justify-center text-black text-xl font-bold">▶</div>
        </button>
      </div>
      <h3 className="text-xl font-bold text-white">Recovery</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-lime-400 text-white text-xs px-3 py-1 rounded-full">Spa</span>
        <span className="bg-lime-400 text-white text-xs px-3 py-1 rounded-full">Pool</span>
        <span className="bg-lime-400 text-white text-xs px-3 py-1 rounded-full">Massage</span>
      </div>
      <p className="text-sm text-gray-200">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>
  </div>
</section>
</div>
  )
}

export default Facilities