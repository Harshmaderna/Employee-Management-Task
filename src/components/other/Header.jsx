import React, { useState } from 'react'
import { setLocalsStorage } from '../../utils/LocalStorage'


const Header = () => {
//  const [userName, setUserName] = useState('')
//  if(!data){
//   setUserName('Admin')
//  } else{
//   setUserName(data.firstName)
//  }

const logOutUser = () => {
  localStorage.setItem('loggedInUser', '')
  window.location.reload()
}

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-semibold'>hello <br/> <span className='text-3xl'>userName 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header
