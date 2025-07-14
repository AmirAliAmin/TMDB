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
    <Home/>
    <MoviesSection/>
    <MoviesDetail/>
    </>
  )
}

export default App
