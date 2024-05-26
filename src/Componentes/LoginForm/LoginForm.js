import React from "react";
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'

function LoginForm(){

    const navigate = useNavigate();
   
    const verificar = () => {
        let nome = document.getElementById("nome").value;
        let senha = document.getElementById("senha").value;

        if (nome === "") {
            alert("Preencha o seu nome");
        } else if (senha === "") {
            alert("Preencha o seu senha");
        } else {
            navigate('/Tabela');
        }
    };

    return (
        <div className="big">
           
            <h1 className="intro">Faça login e entre no nosso Sistema</h1>
            <div className="wrapper">
                <form >
                    <h1>Login</h1>
                    <div className="input_box">
                        <input type="text" id="nome" placeholder="Usuário" required />
                        
                    </div>
                    <div className="input_box">
                        <input type="password" id="senha" placeholder="Senha" required />
                        
                    </div>

                    <div className="remmenber-forgot">
                        <label><input type="checkbox" />Lembra conta</label>
                        <a href="/forgot-password">Esqueceu a senha?</a>

                    </div>

                    <button type="button"  onClick={verificar}>Entra</button>

                    <div className="register-link">
                        <p>Não tem uma conta ? <a href="/Register">Registrar</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
