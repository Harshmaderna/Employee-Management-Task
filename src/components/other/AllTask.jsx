import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
 const authdata =  useContext(AuthContext)
  return (
    <div id='allTask' className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-3 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-white font-semibold text-xl w-1/5'>employeeName</h2>
        <h3 className='text-white font-semibold text-xl w-1/5 '>New Task</h3>
        <h3 className='text-white font-semibold text-xl w-1/5 '>Active Task</h3>
        <h5 className='text-white font-semibold text-xl w-1/5'>Completed Task</h5>
        <h5 className='text-white font-semibold text-xl w-1/5'>Failed Task</h5>
      </div>
     <div className=' '>
       {authdata.employees.map((e, index) => {
        return   <div key={index} className='bg-emerald-600 mb-3 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-white font-semibold text-xl w-1/5'>{e.firstName}</h2>
        <h3 className='text-blue-900 font-semibold text-xl w-1/5 '>{e.taskCount.newTask}</h3>
        <h5 className='text-yellow-900 font-semibold text-xl w-1/5'>{e.taskCount.active}</h5>
        <h5 className='text-white font-semibold text-xl w-1/5'>{e.taskCount.completed}</h5>
         <h5 className='text-white font-semibold text-xl  w-1/5'>{e.taskCount.failed}</h5>
      </div>
      })}
     </div>
      
    </div>
  )
}

export default AllTask
