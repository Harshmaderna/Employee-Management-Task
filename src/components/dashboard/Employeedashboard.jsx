import React from 'react'
import Header from '../other/Header'
import Tasknumber from '../other/Tasknumber'
import TaskList from '../tasklist/TaskList'

const Employeedashboard = ({data}) => {
  return (
    <div>
      <div className='p-20 bg-[#1C1C1C] h-screen'>
        
        <Header data={data}/>
        <Tasknumber data={data}/>
        <TaskList data={data}/>
      </div>
    </div>
  )
}

export default Employeedashboard
