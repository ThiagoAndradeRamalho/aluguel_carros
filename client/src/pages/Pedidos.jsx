import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';

import logo from '../assets/logo.png';
import '../styles/Pedidos.css';
import { PedidoService } from '../services/PedidosService'; // Importando o serviço de pedidos

const Pedidos = () => {
    const navigate = useNavigate();
    const toast = useRef(null);
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editDialog, setEditDialog] = useState(false);
    const [selectedPedido, setSelectedPedido] = useState(null);

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
                console.log(pedidosData)
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPedidos();
    }, []);

    const handleCancel = (id) => {
        console.log(`Pedido ${id} cancelado`);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    const parseDate = (date) => {
        if (!date) return null;
        return new Date(date).toISOString(); // Converte a data para o formato ISO
    };

    const openEditDialog = (rowData) => {
        setSelectedPedido({ ...rowData });
        setEditDialog(true);
    };

    const savePedido = async () => {
        try {
            console.log(selectedPedido)
            const updatedPedido = {
                ...selectedPedido,
                dataInicio: parseDate(selectedPedido.dataInicio), // Converter para ISO
                dataFim: parseDate(selectedPedido.dataFim),       // Converter para ISO
                dataPedido: parseDate(selectedPedido.dataPedido)  // Converter para ISO
            };
            await PedidoService.updatePedido(updatedPedido.id, updatedPedido); // Atualizar pedido no serviço
            const updatedPedidos = pedidos.map(p => p.id === updatedPedido.id ? updatedPedido : p);
            setPedidos(updatedPedidos);
            setEditDialog(false);
            toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Pedido alterado com sucesso', life: 3000 });
        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
            toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao alterar pedido', life: 3000 });
        }
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-text"
                    onClick={() => openEditDialog(rowData)}
                    style={{ color: '#007362' }}
                    tooltip='Editar'
                    aria-label="Editar"
                />
                <Button
                    icon="pi pi-times"
                    className="p-button-rounded p-button-text"
                    onClick={() => handleCancel(rowData.id)}
                    style={{ color: 'red' }}
                    tooltip='Cancelar'
                    aria-label="Cancelar"
                />
            </>
        );
    };

    return (
        <section className="home-section">
            <div className="menu-container">
                <img src={logo} alt="Logo" className="logo" />
                <Menu model={items} className="vertical-menu" />
            </div>
            <div className="home-content">
                <Toast ref={toast} />
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
                        <Column header="Ações" style={{ display: 'flex', justifyContent: 'center' }} body={actionBodyTemplate} />
                    </DataTable>
                )}
                <Dialog
                    header="Editar Pedido"
                    visible={editDialog}
                    style={{ width: '50vw' }}
                    modal
                    onHide={() => setEditDialog(false)}
                    footer={
                        <div>
                            <Button label="Cancelar" icon="pi pi-times" onClick={() => setEditDialog(false)} className="p-button-text" />
                            <Button label="Salvar" icon="pi pi-check" onClick={savePedido} autoFocus />
                        </div>
                    }
                >
                    {selectedPedido && (
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="id">ID</label>
                                <InputText
                                    id="id"
                                    value={selectedPedido.id}
                                    onChange={(e) => setSelectedPedido({ ...selectedPedido, id: e.target.value })}
                                    disabled
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="dataInicio">Data de Início</label>
                                <Calendar
                                    id="dataInicio"
                                    value={selectedPedido.dataInicio ? new Date(selectedPedido.dataInicio) : null}
                                    onChange={(e) => setSelectedPedido({ ...selectedPedido, dataInicio: e.value })}
                                    dateFormat="dd/mm/yy"
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="dataFim">Data de Devolução</label>
                                <Calendar
                                    id="dataFim"
                                    value={selectedPedido.dataFim ? new Date(selectedPedido.dataFim) : null}
                                    onChange={(e) => setSelectedPedido({ ...selectedPedido, dataFim: e.value })}
                                    dateFormat="dd/mm/yy"
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="status">Status</label>
                                <InputText
                                    id="status"
                                    value={selectedPedido.status}
                                    onChange={(e) => setSelectedPedido({ ...selectedPedido, status: e.target.value })}
                                    disabled
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="automovel">Automóvel</label>
                                <InputText
                                    id="automovel"
                                    value={selectedPedido.automovel.modelo}
                                    onChange={(e) => setSelectedPedido({ ...selectedPedido, automovel: { ...selectedPedido.automovel, modelo: e.target.value } })}
                                    disabled
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="dataPedido">Data do Pedido</label>
                                <Calendar
                                    id="dataPedido"
                                    value={selectedPedido.dataPedido ? new Date(selectedPedido.dataPedido) : null}
                                    onChange={(e) => setSelectedPedido({ ...selectedPedido, dataPedido: e.value })}
                                    dateFormat="dd/mm/yy"
                                    disabled
                                />
                            </div>
                        </div>
                    )}
                </Dialog>
            </div>
        </section>
    );
};

export default Pedidos;
