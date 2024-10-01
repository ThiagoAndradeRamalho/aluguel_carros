import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import logo from '../assets/logo.png';
import '../styles/Pedidos.css';
import { PedidoService } from '../services/PedidosService'; // Importando o serviço de pedidos

const Pedidos = () => {
    const navigate = useNavigate();
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Carros', icon: 'pi pi-fw pi-car', command: () => navigate('/carros') },
        { label: 'Aluguel', icon: 'pi pi-fw pi-money-bill', command: () => navigate('/aluguel') },
        { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-cart', command: () => navigate('/pedidos') },
        { label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: () => navigate('/logout') }
    ];

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const pedidosData = await PedidoService.getAllPedidos(); // Obtendo todos os pedidos
                setPedidos(pedidosData);
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPedidos();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    return (
        <section className="home-section">
            <div className="menu-container">
                <img src={logo} alt="Logo" className="logo" />
                <Menu model={items} className="vertical-menu" />
            </div>
            <div className="home-content">
                <h3>Meus Pedidos</h3>
                {loading ? (
                    <p>Carregando pedidos...</p>
                ) : (
                    <DataTable value={pedidos} paginator rows={10} responsiveLayout="scroll">
                        <Column field="id" header="ID" />
                        <Column field="dataInicio" header="Data de Início" body={(rowData) => formatDate(rowData.dataInicio)} />
                        <Column field="dataFim" header="Data de Devolução" body={(rowData) => formatDate(rowData.dataFim)} />
                        <Column field="status" header="Status" />
                        <Column field="automovel.modelo" header="Automóvel" />
                        <Column field="dataPedido" header="Data do Pedido" body={(rowData) => formatDate(rowData.dataPedido)} />
                    </DataTable>
                )}
            </div>
        </section>
    );
};

export default Pedidos;
