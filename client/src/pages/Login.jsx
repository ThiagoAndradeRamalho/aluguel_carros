// src/components/Login.jsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Alterado para useNavigate
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast'; // Importando Toast
import logo from '../assets/logo.png';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useRef(null); // Referência para o Toast
  const navigate = useNavigate(); // Usando useNavigate

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Login successful!', life: 3000 });
      // Redirecionar ou executar outra ação após o login bem-sucedido
    } else {
      setError('Invalid username or password');
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Invalid username or password', life: 3000 });
    }
  };

  const handleRedirectToSignup = () => {
    navigate('/signup'); // Usando navigate para redirecionar
  };

  return (
    <section className="login-section">
      <Toast ref={toast} /> {/* Adicionando o Toast ao componente */}
      <div className="login-image">
        <img src={logo} alt="Login" />
      </div>
      <div className="login-form">
        <div className="login-card">
          <h2>Login</h2>
          <div className="p-field">
            <p htmlFor="username">Username</p>
            <InputText id="username" style={{ width: "30rem" }} value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="p-field">
            <p htmlFor="password">Password</p>
            <Password id="password" className="password-input" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
          </div>

          {error && <Message severity="error" text={error} style={{marginLeft: "25%", marginBottom: "2rem"}} />}
          <Button className='login-button' label="Login" onClick={handleLogin} />

          <div className="social-login">
            <h3>Ou faça login com</h3>
            <div className="social-buttons">
              <Button
                icon="pi pi-google"
                className="social-button"
                onClick={() => toast.current.show({ severity: 'info', summary: 'Info', detail: 'Login com Google', life: 3000 })}
              />
              <Button
                icon="pi pi-envelope" // Ícone do Outlook
                className="social-button"
                onClick={() => toast.current.show({ severity: 'info', summary: 'Info', detail: 'Login com Outlook', life: 3000 })}
              />
              <Button
                icon="pi pi-facebook"
                className="social-button"
                onClick={() => toast.current.show({ severity: 'info', summary: 'Info', detail: 'Login com Facebook', life: 3000 })}
              />
            </div>
            <div className="signup-link">
              <p>Não tem uma conta? <span onClick={handleRedirectToSignup} style={{ cursor: 'pointer', color: 'blue' }}>Cadastre-se</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
