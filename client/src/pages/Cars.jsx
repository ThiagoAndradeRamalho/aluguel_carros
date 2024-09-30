import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import logo from '../assets/logo.png';
import porsche from '../assets/porsche.png';
import '../styles/CarPage.css';

const CarPage = () => {
    const navigate = useNavigate();

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Carros', icon: 'pi pi-fw pi-car', command: () => navigate('/carros') },
        { label: 'Aluguel', icon: 'pi pi-fw pi-money-bill', command: () => navigate('/aluguel') },
        { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-cart', command: () => navigate('/pedidos') },
        { label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: () => navigate('/logout') }
    ];

    const cars = [
        {
            name: 'Ferrari 488 GTB',
            model: '488 GTB',
            year: 2020,
            price: '$262,000',
            image: porsche
        },
        {
            name: 'Lamborghini Aventador',
            model: 'Aventador',
            year: 2021,
            price: '$393,695',
            image: porsche
        },
        {
            name: 'Porsche 911 Turbo S',
            model: '911 Turbo S',
            year: 2020,
            price: '$203,500',
            image: porsche
        },
        {
            name: 'Porsche 911 Turbo S',
            model: '911 Turbo S',
            year: 2020,
            price: '$203,500',
            image: porsche
        }
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
                        title={car.name}
                        subTitle={car.model}
                        style={{ width: '25em', height: '25em' }}
                        header={<img alt={car.name} src={car.image} />}
                        className="car-card"
                    >                        <Button
                            label="Alugar"
                            icon="pi pi-shopping-cart"
                            onClick={() => navigate(`/car-details/${car.name}`)}
                            className="p-button"
                            style={{ backgroundColor: '#007362', width: '100%' }}
                        />

                    </Card>
                ))}
            </div>
        </section>
    );
};

export default CarPage;
