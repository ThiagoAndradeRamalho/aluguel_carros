import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import logo from '../assets/logo.png';
import '../styles/EditarCarPage.css';
import { AutomoveisService } from '../services/automoveisService';

const CarPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const carDetails = await AutomoveisService.getAutomovelById(id);
                setCar(carDetails);
            } catch (error) {
                console.error("Erro ao buscar detalhes do automóvel:", error);
            }
        };

        fetchCarDetails();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCar((prevCar) => ({
            ...prevCar,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            await AutomoveisService.updateAutomovel(id, car);
            setIsEditing(false);
        } catch (error) {
            console.error("Erro ao atualizar detalhes do automóvel:", error);
        }
    };

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Carros', icon: 'pi pi-fw pi-car', command: () => navigate('/carros') },
        { label: 'Aluguel', icon: 'pi pi-fw pi-money-bill', command: () => navigate('/aluguel') },
        { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-cart', command: () => navigate('/pedidos') },
        { label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: () => navigate('/logout') }
    ];

    if (!car) {
        return <div>Carregando...</div>;
    }

    return (
        <section className="home-section">
            <div className="menu-container">
                <img src={logo} alt="Logo" className="logo" />
                <Menu model={items} className="vertical-menu" />
            </div>
            <div className="car-content">
                <div className="imagem-content">
                    <img src={car.imagem} alt={car.modelo}></img>
                    <div className="button-container">
                    {isEditing ? (
                        <button onClick={handleSave}>  <i className="pi pi-save"></i></button>
                    ) : (
                        <button onClick={() => setIsEditing(true)}> <i className="pi pi-pencil"></i></button>
                    )}
                </div>
                </div>

                <h3 className='car-name'>
                    {isEditing ? (
                        <input
                            type="text"
                            name="modelo"
                            value={car.modelo}
                            onChange={handleInputChange}
                        />
                    ) : (
                        car.modelo
                    )}
                </h3>

                <table>
                    <tbody>
                        <tr>
                            <td>Marca</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="marca"
                                        value={car.marca}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.marca
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Modelo</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="modelo"
                                        value={car.modelo}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.modelo
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Ano</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="ano"
                                        value={car.ano}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.ano
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Cor</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="cor"
                                        value={car.cor}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.cor
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Tipo de Combustível</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="tipoCombustivel"
                                        value={car.tipoCombustivel}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.tipoCombustivel
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Tipo de Carro</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="tipoCarro"
                                        value={car.tipoCarro}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.tipoCarro
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Transmissão</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="transmissao"
                                        value={car.transmissao}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.transmissao
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Número de Portas</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="numeroPortas"
                                        value={car.numeroPortas}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.numeroPortas
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Consumo de Combustível (km/l)</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="consumoCombustivel"
                                        value={car.consumoCombustivel}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.consumoCombustivel
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Quilometragem Atual (km)</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="quilometragemAtual"
                                        value={car.quilometragemAtual}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.quilometragemAtual
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Velocidade Máxima (km/h)</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="velocidadeMaxima"
                                        value={car.velocidadeMaxima}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    car.velocidadeMaxima
                                )}
                            </td>
                        </tr>
                        {isEditing && (
                            <tr>
                                <td>Nova Imagem</td>
                                <td>
                                    <input
                                        type="text"
                                        name="imagem"
                                        value={car.imagem}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CarPage;
