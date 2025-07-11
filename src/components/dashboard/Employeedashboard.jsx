import React from 'react'
import Header from '../other/Header'
import Tasknumber from '../other/Tasknumber'
import TaskList from '../tasklist/TaskList'

const Employeedashboard = () => {
  return (
    <div>
      <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header />
        <Tasknumber />
        <TaskList />
      </div>
    </div>
  )
}

export default Employeedashboard
