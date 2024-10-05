import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import CarDetail from '../pages/CarDetail';
import CadastrarCar from '../pages/CadastrarCar';
import Aluguel from '../pages/Aluguel';
import Pedidos from '../pages/Pedidos';
import EditarCarPage from '../pages/EditarCar';
import ContratoPage from '../pages/Contrato'; 

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
        <Route path="/create-car" element={<CadastrarCar />} />
        <Route path="/edit-car/:id" element={<EditarCarPage />} />
        <Route path="/contrato/:id" element={<ContratoPage />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
