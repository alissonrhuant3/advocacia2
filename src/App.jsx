import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer';

import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Services from './pages/Services.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
            <Route index path='/' element={<><Home/></>} />
            <Route index path='/sobre' element={<><Sobre/></>} />
            <Route index path='/services' element={<><Services/></>} />
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
