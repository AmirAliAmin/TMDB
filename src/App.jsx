import './App.css'
import Seachbar from './components/Seachbar'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Sidebar from './pages/Sidebar'

function App() {
 
  return (
    <>
    <Navbar/>
    {/* <Seachbar/> */}
    <Home/>
    <Sidebar/>
    </>
  )
}

export default App
