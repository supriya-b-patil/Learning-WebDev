import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './404 Not Found/NotFound'
import LandingPage from './Landing Page/LandingPage'
import MyNotes from './My Notes/MyNotes'
import Profile from './Profile/Profile'

const AllRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/mynotes' element={<MyNotes />} />
            <Route path='/myprofile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Router>
   )
}

export default AllRoutes