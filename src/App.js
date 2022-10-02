import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { Home } from './Home.jsx'
import { Login } from './Login.jsx'
import { Profile } from './Profile.jsx'
const App = () => {
  return (
    <>
   <Router>

    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/Account" element={<Profile/>}/>



    </Routes>
    </Router>
    </>
  )
}

export default App