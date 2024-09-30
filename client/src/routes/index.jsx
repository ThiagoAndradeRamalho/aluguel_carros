import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import Cars from '../pages/Cars'
import CarDetail from '../pages/CarDetail';
import CadastarCar from '../pages/CadastrarCar';
import Aluguel from '../pages/Aluguel'
import Pedidos from '../pages/Pedidos'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carros" element={<Cars />} />
        <Route path="/aluguel" element={<Aluguel />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/car-details/:id" element={<CarDetail />} />
        <Route path="/create-car" element={<CadastarCar />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
