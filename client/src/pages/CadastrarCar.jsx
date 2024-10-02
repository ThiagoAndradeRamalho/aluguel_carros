import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import logo from '../assets/logo.png';
import { AutomoveisService } from '../services/automoveisService';
import '../styles/CadastrarCar.css';
import { useState, useRef } from 'react';

const CadastrarPage = () => {
    const navigate = useNavigate();
    const toast = useRef(null);

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Carros', icon: 'pi pi-fw pi-car', command: () => navigate('/carros') },
        { label: 'Aluguel', icon: 'pi pi-fw pi-money-bill', command: () => navigate('/aluguel') },
        { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-cart', command: () => navigate('/pedidos') },
        { label: 'Sair', icon: 'pi pi-fw pi-sign-out', command: () => navigate('/logout') }
    ];

    const [automovel, setAutomovel] = useState({
        marca: '',
        modelo: '',
        placa: '',
        ano: null,
        cor: '',
        tipoCombustivel: '',
        tipoCarro: '',
        transmissao: '',
        numeroPortas: null,
        consumoCombustivel: null,
        quilometragemAtual: null,
        velocidadeMaxima: null,
        imagem: '',
        disponivel: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAutomovel({ ...automovel, [name]: value });
    };

    const handleNumberChange = (name, value) => {
        setAutomovel({ ...automovel, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const result = await AutomoveisService.addAutomovel(automovel);
            console.log('Automóvel adicionado com sucesso:', result);
            await toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Veículo cadastrado com sucesso!', life: 3000 });
            setTimeout(() => {
                navigate('/carros');
            }, 2000);
        } catch (error) {
            console.error('Erro ao adicionar automóvel:', error);
            await toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Falha ao cadastrar veículo!', life: 3000 });
        }
    };

    return (
        <section className="home-section">
            <Toast ref={toast} />
            <div className="menu-container">
                <img src={logo} alt="Logo" className="logo" />
                <Menu model={items} className="vertical-menu" />
            </div>
            <div className="castrar-car-content">
                <h2>Cadastrar Veículo</h2>
                <form onSubmit={handleSubmit} className="car-form">
                    <div className='form-line'>
                        <InputText name="marca" placeholder="Marca" value={automovel.marca} onChange={handleChange} className="form-input" />
                        <InputText name="modelo" placeholder="Modelo" value={automovel.modelo} onChange={handleChange} className="form-input" />
                    </div>
                    <div className='form-line'>
                        <InputText name="placa" placeholder="Placa" value={automovel.placa} onChange={handleChange} required className="form-input" />
                        <InputNumber style={{ width: '104%' }} name="ano" placeholder="Ano" value={automovel.ano} onValueChange={(e) => handleNumberChange('ano', e.value)} className="form-input" />
                    </div>
                    <div className='form-line'>
                        <InputText name="cor" placeholder="Cor" value={automovel.cor} onChange={handleChange} className="form-input" />
                        <InputText name="tipoCombustivel" placeholder="Tipo de Combustível" value={automovel.tipoCombustivel} onChange={handleChange} className="form-input" />
                    </div>
                    <div className='form-line'>
                        <InputText name="tipoCarro" placeholder="Tipo de Carro" value={automovel.tipoCarro} onChange={handleChange} className="form-input" />
                        <InputText name="transmissao" placeholder="Transmissão" value={automovel.transmissao} onChange={handleChange} className="form-input" />
                    </div>
                    <div className='form-line'>
                        <InputNumber style={{ width: '100%' }} name="numeroPortas" placeholder="Número de Portas" value={automovel.numeroPortas} onValueChange={(e) => handleNumberChange('numeroPortas', e.value)} className="form-input" />
                        <InputNumber style={{ width: '100%' }} name="consumoCombustivel" placeholder="Consumo de Combustível" value={automovel.consumoCombustivel} onValueChange={(e) => handleNumberChange('consumoCombustivel', e.value)} className="form-input" />
                    </div>
                    <div className='form-line'>
                        <InputNumber style={{ width: '100%' }} name="quilometragemAtual" placeholder="Quilometragem Atual" value={automovel.quilometragemAtual} onValueChange={(e) => handleNumberChange('quilometragemAtual', e.value)} className="form-input" />
                        <InputNumber style={{ width: '100%' }} name="velocidadeMaxima" placeholder="Velocidade Máxima" value={automovel.velocidadeMaxima} onValueChange={(e) => handleNumberChange('velocidadeMaxima', e.value)} className="form-input" />
                    </div>
                    <div className='form-line'>
                        <InputText name="imagem" placeholder="URL da Imagem" value={automovel.imagem} onChange={handleChange} className="form-input" />
                    </div>
                    <Button style={{width: '100%', backgroundColor: '#007362', border: 'transparent'}} label="Cadastrar Veículo" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default CadastrarPage;
