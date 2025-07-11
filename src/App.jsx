import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/dashboard/Employeedashboard'
import Admindashboard from './components/dashboard/Admindashboard'
import { getLocalStorage, setLocalsStorage } from './utils/LocalStorage'


const App = () => {
const [user, setuser] = useState(null)
  return (
    <>
    {}
      <Login />
      {/* <Employeedashboard /> */}
      {/* <Admindashboard /> */}
      
    
    </>
  )
}

export default App
