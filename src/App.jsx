import { Route, Routes } from 'react-router-dom'
import './App.css'
import Seachbar from './components/Seachbar'
import Home from './pages/Home'
import MoviesDetail from './pages/MoviesDetail'
import MoviesSection from './pages/MoviesSection'
import Navbar from './pages/Navbar'
import Sidebar from './pages/Sidebar'

function App() {
 
  return (
    <>

    <Navbar/>
    {/* <Seachbar/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie' element={<MoviesSection/>}/>
      <Route path="/movie/:id" element={<MoviesDetail />} />
    </Routes>
    </>
  )
}

export default App
