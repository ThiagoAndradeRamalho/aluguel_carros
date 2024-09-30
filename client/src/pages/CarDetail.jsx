import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import logo from '../assets/logo.png';
import porsche from '../assets/carro.png';
import '../styles/CarDetailPage.css';

const CarPage = () => {

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
            <div className="car-content">

                <div className="imagem-content">
                    <img src={porsche}></img>
                </div>

                <h3 className='car-name'>PORSCHE 911</h3>

                <Button
                    label="Solitar Aluguel"
                    onClick={() => navigate(`/car-details`)}
                    className="p-button"
                    style={{ backgroundColor: '#007362', width: '30%', height: '8%' , display: 'flex', justifyContent: 'center', margin: 'auto', marginBottom: '1em'}}
                />

                <table>
                    <tbody>
                        <tr>
                            <td>Marca</td>
                            <td>Ford</td>
                        </tr>
                        <tr>
                            <td>Modelo</td>
                            <td>Fusion</td>
                        </tr>
                        <tr>
                            <td>Ano</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>Cor</td>
                            <td>Preto</td>
                        </tr>
                        <tr>
                            <td>Tipo de Combustível</td>
                            <td>Gasolina</td>
                        </tr>
                        <tr>
                            <td>Tipo de Carro</td>
                            <td>SUV</td>
                        </tr>
                        <tr>
                            <td>Transmissão</td>
                            <td>Automático</td>
                        </tr>
                        <tr>
                            <td>Número de Portas</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Consumo de Combustível (km/l)</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Quilometragem Atual (km)</td>
                            <td>30000</td>
                        </tr>
                        <tr>
                            <td>Velocidade Máxima (km/h)</td>
                            <td>210</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CarPage;
