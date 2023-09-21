import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SideBar from './components/SideBar'
import About from './components/About'
import Contacts from './components/Contacts'

function App() {
  return (
    <>
      <div className="app-container">
        <SideBar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
