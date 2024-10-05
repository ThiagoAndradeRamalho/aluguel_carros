import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import logo from '../assets/logo.png';
import '../styles/CarPage.css';
import { AutomoveisService } from '../services/automoveisService';

const CarPage = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const cars = await AutomoveisService.getAllautomovel();
                console.log(cars)
                setCars(cars);
            } catch (error) {
                console.error("Erro ao buscar automóveis:", error);
            }
        };

        fetchCars();
    }, []);

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Carros', icon: 'pi pi-fw pi-car', command: () => navigate('/carros') },
        { label: 'Aluguel', icon: 'pi pi-fw pi-money-bill', command: () => navigate('/aluguel') },
        { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-cart', command: () => navigate('/pedidos') },
        { label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: () => navigate('/logout') }
    ];

    return (
        <section className="home-section">
            <div className="menu-container">
                <img src={logo} alt="Logo" className="logo" />
                <Menu model={items} className="vertical-menu" />
            </div>
            <div className="car-content">
                {cars.map((car, index) => (
                    <Card
                        key={index}
                        title={car.modelo}
                        subTitle={car.marca}
                        style={{ width: '25em', height: '27em' }}
                        header={
                            <img
                                alt={car.modelo}
                                src={car.imagem}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                            />
                        }
                        className="car-card"
                    >
                        <Button
                            label="Alugar"
                            icon="pi pi-shopping-cart"
                            onClick={() => navigate(`/car-details/${car.id}`)}
                            className="p-button"
                            style={{ backgroundColor: '#007362', width: '100%', border: 'transparent' }}
                        />
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default CarPage;
