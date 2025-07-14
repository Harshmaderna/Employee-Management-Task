import React from 'react'

const Accepttask = () => {
  return (
   <div className="h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2 className="mt-5  text-2xl font-semibold">make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempore
          quia exercitationem obcaecati ullam sed.
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-700 py-1 px-2 text-sm rounded text-white font-semibold cursor-pointer'>mark as completed</button>
            <button className='bg-red-700 py-1 px-2 text-sm rounded text-white cursor-pointer font-semibold'>mark as failed</button>
        </div>
      </div>
  )
}

export default Accepttask
