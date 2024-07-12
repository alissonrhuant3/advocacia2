import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Principal from './pages/Principal';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer';

function AppRoutes() {
  return (
      <Router>
        <Navbar />
          <Routes>
              <Route index path='/' element={<Principal />}></Route>
              <Route path='/servicos' element={<Servicos />}></Route>
              <Route path='/sobre' element={<Sobre />}></Route>
          </Routes>
          <Footer />
      </Router>
  );
}

export default AppRoutes;