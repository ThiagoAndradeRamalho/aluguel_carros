import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import logo from '../assets/logo.png';
import '../styles/Signup.css'; // Atualizando o estilo para o Registro

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !email || !rg || !cpf || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios');
      toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Todos os campos são obrigatórios', life: 3000 });
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não correspondem');
      toast.current.show({ severity: 'error', summary: 'Erro', detail: 'As senhas não correspondem', life: 3000 });
      return;
    }

    // Aqui você pode adicionar a lógica de registro (chamar API, etc.)
    toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Registro realizado com sucesso!', life: 3000 });
    navigate('/login'); // Redireciona para a tela de login após o registro bem-sucedido
  };

  const handleRedirectToLogin = () => {
    navigate('/login'); // Redirecionar para a tela de login
  };

  return (
    <section className="register-section">
      <Toast ref={toast} />
      <div className="register-image">
        <img src={logo} alt="Register" />
      </div>
      <div className="register-form">
        <div className="register-card">
          <h2>Registrar</h2>
          <div className="form-field">
            <p htmlFor="username">Nome Completo:</p>
            <InputText id="username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-field">
            <p htmlFor="email">Email:</p>
            <InputText id="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <p htmlFor="rg">Registro Geral (RG):</p>
            <InputText id="rg" className="input-field" value={rg} onChange={(e) => setRg(e.target.value)} />
          </div>
          <div className="form-field">
            <p htmlFor="cpf">CPF:</p>
            <InputText id="cpf" className="input-field" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </div>
          <div className="form-field">
            <p htmlFor="password">Senha</p>
            <Password id="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-field">
            <p htmlFor="confirm-password">Confirmar Senha</p>
            <Password id="confirm-password" className="input-field" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          {error && <Message severity="error" text={error} style={{ marginLeft: "25%", marginBottom: "2rem" }} />}
          <Button className='register-button' label="Registrar" onClick={handleRegister} />

          <div className="login-link">
            <p>Já tem uma conta? <span onClick={handleRedirectToLogin} style={{ cursor: 'pointer', color: 'blue' }}>Faça login</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
