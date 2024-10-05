import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ContratoService } from '../services/ContratoService';
import logo from '../assets/logo.png';
import '../styles/ContratoPage.css';

const Contratos = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [contratos, setContratos] = useState([]);
    const [loading, setLoading] = useState(false);

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Carros', icon: 'pi pi-fw pi-car', command: () => navigate('/carros') },
        { label: 'Aluguel', icon: 'pi pi-fw pi-money-bill', command: () => navigate('/aluguel') },
        { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-cart', command: () => navigate('/pedidos') },
        { label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: () => navigate('/logout') }
    ];

    const fetchContratoById = async (contractId) => {
        try {
            setLoading(true);
            const contrato = await ContratoService.getAutomovelById(contractId);
            setContratos([contrato]);
            console.log(contrato);
        } catch (error) {
            console.error("Erro ao buscar contrato:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchContratoById(id);
        }
    }, [id]);

    return (
        <section className="home-section">
            <div className="menu-container">
                <img src={logo} alt="Logo" className="logo" />
                <Menu model={items} className="vertical-menu" />
            </div>
            <div className="home-content">
                <Button 
                    label="Voltar" 
                    icon="pi pi-arrow-left" 
                    onClick={() => navigate(`/pedidos`)} 
                    className="p-button-secondary" 
                    style={{ marginBottom: '1rem' }} 
                />
                <div className="contrato-header">
                    <h2 className="contrato-title">Contrato: N°{id}</h2>
                </div>
                {loading ? (
                    <p>Carregando contrato...</p>
                ) : (
                    <DataTable value={contratos}>
                        <Column field="id" header="ID" />
                        <Column field="tipoRegistro" header="Registro" />
                        <Column field="associadoCredito" header="Crédito" />
                        <Column field="agenteId" header="ID do Agente" />
                        <Column field="automovelId" header="ID do Automóvel" />
                        <Column field="clienteId" header="ID do Cliente" />
                    </DataTable>
                )}
            </div>
        </section>
    );
};

export default Contratos;