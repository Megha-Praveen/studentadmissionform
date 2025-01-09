import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Registerform from './pages/Registerform'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Registerform/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App