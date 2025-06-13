import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home-page/Page'
import LoginPage from './pages/login-page/Page'
import ProfilePage from './pages/profile-page/Page'
import Navbar from './components/Navbar'


function App() {

  return (
    <>

      <BrowserRouter>

        <Navbar />
        
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Profile' element={<ProfilePage />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App