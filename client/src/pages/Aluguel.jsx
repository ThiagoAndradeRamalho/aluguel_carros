import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import logo from '../assets/logo.png';
import '../styles/Home.css';

const Aluguel = () => {
    const navigate = useNavigate();

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
            <div className="home-content">
                <h1>Bem-vindo à Página Inicial</h1>
                <p>Use o menu ao lado para navegar entre as páginas.</p>
            </div>
        </section>
    );
};

export default Aluguel;
