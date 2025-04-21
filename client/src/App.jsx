import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'; // Or './App.css' — whatever you're using
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import ManageJobs from './pages/ManageJobs';
import ViewApplications from './pages/ViewApplications';

const App = () => {

  const {showRecruiterLogin} =useContext(AppContext)
  return (
    <div>
     { showRecruiterLogin &&   <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='add-job' element={<AddJob/>} />
        <Route path='manage-job' element={<ManageJobs/>} />
        <Route path='view-applications' element={<ViewApplications/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
