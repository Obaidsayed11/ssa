import React from 'react'
import home5 from '../assets/home5.jpg'
import home6 from '../assets/home6.jpg'
import home7 from '../assets/home7.jpg'
import home8 from '../assets/home8.png'
import home9 from '../assets/home9.jpg'

const Features = () => {
  return (
    <div><div className="bg-white px-6 md:px-16 py-12 space-y-20">

  <section>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">
        Key Features<span className="text-green-500">•</span>
      </h2>
      <button className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 text-sm">
        Register Now
      </button>
    </div>

    <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-sm md:text-base">
      <ul className="space-y-2 list-disc list-inside">
        <li>First venue with 20+ ITF & AITA</li>
        <li>First venue in India to host 6 back-to-back circuits (30 days × 3 = 90 matches in 30 days)</li>
        <li>First facility to offer NTRP-based matches</li>
        <li>First holistic tennis facility to hold ATP matches</li>
        <li>First to host ATP & WTA combined camps</li>
        <li>India’s first elite tennis academy inside India</li>
      </ul>
      <ul className="space-y-2 list-disc list-inside">
        <li>First venue in the world to host 6 back-to-back ITF Juniors</li>
        <li>Only centre in the world to host 6 levels from U-12 to ATP Challenger</li>
        <li>First Indian tennis academy inside Pacific</li>
        <li>Only centre globally to conduct 8+ matches in a day consistently</li>
        <li>Fully equipped campus, 24/7 training, schooling, nutrition, housing</li>
      </ul>
    </div>
  </section>

  <section>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">
        A Glimpse of Excellence<span className="text-green-500">•</span>
      </h2>
      <button className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 text-sm">
        Register Now
      </button>
    </div>

   <div className="flex ml-52 space-x-4">
  <img
    src={home5}
    alt="Tennis 1"
    className="w-[40%] h-[450px] rounded-lg object-cover"
  />
  <img
    src={home6}
    alt="Tennis 2"
    className="w-[60%] h-[450px] rounded-lg object-cover"
  />
</div>

  </section>

  <section>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">
        Programs<span className="text-green-500">•</span>
      </h2>
      <button className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 text-sm">
        Register Now
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
 
      <div className="relative overflow-hidden rounded-lg group">
        <img src={home7} alt="Academy" className="w-full h-64 object-cover group-hover:scale-105 transition" />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
          <h3 className="text-xl font-semibold">Academy</h3>
          <p className="text-sm">Get enrolled with us</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg group">
        <img src={home8} alt="Camps" className="w-full h-64 object-cover group-hover:scale-105 transition" />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
          <h3 className="text-xl font-semibold">Camps</h3>
          <p className="text-sm">Get enrolled with us</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg group">
        <img src={home9} alt="Performance" className="w-full h-64 object-cover group-hover:scale-105 transition" />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-4 text-white">
          <h3 className="text-xl font-semibold">Performance</h3>
          <p className="text-sm">Get enrolled with us</p>
        </div>
      </div>
    </div>
  </section>
</div>
</div>
  )
}

export default Features