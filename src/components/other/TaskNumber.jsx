import React from 'react'

const Tasknumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='w-[45%] py-6 px-10 rounded-xl bg-red-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] py-6 px-10 rounded-xl bg-blue-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>complete task</h3>
      </div>
       <div className='w-[45%] py-6 px-10 rounded-xl bg-green-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Accepted task</h3>
      </div>
       <div className='w-[45%] py-6 px-10 rounded-xl bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failded Task</h3>
      </div>
    </div>
  )
}

export default Tasknumber
