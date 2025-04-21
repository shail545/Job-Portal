import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'; // Or './App.css' — whatever you're using
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/AppContext';

const App = () => {

  const {showRecruiterLogin} =useContext(AppContext)
  return (
    <div>
     { showRecruiterLogin &&   <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
      </Routes>
    </div>
  )
}

export default App
