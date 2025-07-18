import React from 'react'

const Newtask = ({data}) => {
 console.log(data)
  return (
             <div className="h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className="mt-5  text-2xl font-semibold">{data.title}</h2> 
        <p className="text-sm mt-2">
         {data.description}
        </p>

         <div className='mt-4'>
            <button className='bg-green-700 py-1 px-2 text-sm rounded text-white font-semibold cursor-pointer'>accept task</button>
           
        </div>
      </div>
  )
}

export default Newtask
