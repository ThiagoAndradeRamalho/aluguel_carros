import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import logo from '../assets/logo.png';
import '../styles/CarDetailPage.css';
import { AutomoveisService } from '../services/automoveisService';
import { PedidoService } from '../services/PedidosService'; // Importando o serviço de pedido

const CarPage = () => {
    const navigate = useNavigate();

    const toast = useRef(null);
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [dateRange, setDateRange] = useState([null, null]);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const carDetails = await AutomoveisService.getAutomovelById(id);
                setCar(carDetails);
                console.log(carDetails)
            } catch (error) {
                console.error("Erro ao buscar detalhes do automóvel:", error);
            }
        };

        fetchCarDetails();
    }, [id]);

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

    const handleRentClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setDateRange([null, null]);
    };

    const handleRent = async () => {
        try {
            console.log(dateRange)
            const pedido = {
                dataInicio: dateRange[0],
                dataFim: dateRange[1],
                status: 'Pendente',
                clienteId: 1,
                automovelId: car.id,
                contratoId: 1
            };

            await PedidoService.createPedido(pedido); // Chamando o serviço para criar o pedido
            toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Pedido criado com sucesso!', life: 3000 });
            handleCloseModal();

            setTimeout(() => {
                navigate('/pedidos');
            }, 3000);
        } catch (error) {
            console.error("Erro ao criar o pedido:", error);
            toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Falha ao criar o pedido.', life: 3000 });
        }
    };

    return (
        <section className="home-section">
            <Toast ref={toast} />
            <div className="menu-container">
                <img src={logo} alt="Logo" className="logo" />
                <Menu model={items} className="vertical-menu" />
            </div>
            <div className="car-content">
                <div className="imagem-content">
                    <img src={car.imagem} alt={car.modelo}></img>
                </div>

                <h3 className='car-name'>{car.modelo}</h3>

                <Button
                    label="Solicitar Aluguel"
                    onClick={handleRentClick}
                    className="p-button"
                    style={{ backgroundColor: '#007362', width: '30%', height: '8%', display: 'flex', justifyContent: 'center', margin: 'auto', marginBottom: '5em' }}
                />

                <table>
                    <tbody>
                        <tr>
                            <td>Marca</td>
                            <td>{car.marca}</td>
                        </tr>
                        <tr>
                            <td>Modelo</td>
                            <td>{car.modelo}</td>
                        </tr>
                        <tr>
                            <td>Ano</td>
                            <td>{car.ano}</td>
                        </tr>
                        <tr>
                            <td>Cor</td>
                            <td>{car.cor}</td>
                        </tr>
                        <tr>
                            <td>Tipo de Combustível</td>
                            <td>{car.tipoCombustivel}</td>
                        </tr>
                        <tr>
                            <td>Tipo de Carro</td>
                            <td>{car.tipoCarro}</td>
                        </tr>
                        <tr>
                            <td>Transmissão</td>
                            <td>{car.transmissao}</td>
                        </tr>
                        <tr>
                            <td>Número de Portas</td>
                            <td>{car.numeroPortas}</td>
                        </tr>
                        <tr>
                            <td>Consumo de Combustível (km/l)</td>
                            <td>{car.consumoCombustivel}</td>
                        </tr>
                        <tr>
                            <td>Quilometragem Atual (km)</td>
                            <td>{car.quilometragemAtual}</td>
                        </tr>
                        <tr>
                            <td>Velocidade Máxima (km/h)</td>
                            <td>{car.velocidadeMaxima}</td>
                        </tr>
                    </tbody>
                </table>

                <Dialog
                    header="Solicitar Aluguel"
                    visible={showModal}
                    onHide={handleCloseModal}
                    modal
                    style={{ width: '50%', maxWidth: '600px' }} // Definindo largura máxima
                >
                    <div className="date-range" style={{ padding: '2em', display: 'flex', flexDirection: 'column' }}>
                        <h5 style={{ marginBottom: '0.5em' }}>Selecione o intervalo de datas:</h5>
                        <p style={{ marginBottom: '1em', color: '#666' }}>Escolha a data de início e a data de devolução do seu aluguel.</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1em' }} className='datas'>
                            <input
                                type="date"
                                value={dateRange[0] ? dateRange[0].toISOString().split('T')[0] : ''}
                                onChange={(e) => setDateRange([new Date(e.target.value), dateRange[1]])}
                                placeholder="Data de Início"
                                style={{ width: '48%', borderRadius: '8px', marginRight: '1%' }}
                            />
                            <input
                                type="date"
                                value={dateRange[1] ? dateRange[1].toISOString().split('T')[0] : ''}
                                onChange={(e) => setDateRange([dateRange[0], new Date(e.target.value)])}
                                placeholder="Data de Devolução"
                                style={{ width: '48%', borderRadius: '8px' }}
                            />
                        </div>

                        {/* Exibe a data de início e devolução */}
                        {dateRange[0] && dateRange[1] && (
                            <div style={{ marginTop: '1em', fontWeight: 'bold', color: '#4CAF50', border: '1px solid #4CAF50', borderRadius: '5px', padding: '0.5em' }}>
                                <p>Data de Início: <strong>{dateRange[0].toLocaleDateString()}</strong></p>
                                <p>Data de Devolução: <strong>{dateRange[1].toLocaleDateString()}</strong></p>
                            </div>
                        )}

                        {/* Exibe uma mensagem de erro se a data de devolução for anterior à data de início */}
                        {dateRange[0] && dateRange[1] && dateRange[1] < dateRange[0] && (
                            <div style={{ marginTop: '1em', fontWeight: 'bold', color: '#FF0000', border: '1px solid #FF0000', borderRadius: '5px', padding: '0.5em' }}>
                                <p>A data de devolução não pode ser anterior à data de início.</p>
                            </div>
                        )}
                    </div>

                    <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', padding: '1em', borderTop: '1px solid #ddd' }}>
                        <Button
                            label="Confirmar"
                            onClick={() => {
                                if (dateRange[0] && dateRange[1] && dateRange[1] >= dateRange[0]) {
                                    handleRent();
                                } else {
                                    alert('A data de devolução não pode ser anterior à data de início.');
                                }
                            }}
                            className="p-button"
                            disabled={!dateRange[0] || !dateRange[1]}
                            style={{ flex: 1, marginRight: '1em', backgroundColor: '#007362', border: 'transparent' }}
                        />
                        <Button
                            label="Cancelar"
                            onClick={handleCloseModal}
                            className="p-button-secondary"
                            style={{ flex: 1 }}
                        />
                    </div>
                </Dialog>
            </div>
        </section>
    );
};

export default CarPage;
