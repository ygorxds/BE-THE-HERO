import { Link, useHistory } from 'react-router-dom'
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.png";
import { FiLogIn } from "react-icons/fi";
import React, { useState } from "react";
import api from "../../services/api"
import './styles.css';


export default function Logon() {

  const [id, setId] = useState("");
  const history = useHistory();


  async function hangleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push("/profile")

    } catch (err) {
      alert('Falha no login tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form onSubmit={hangleLogin}>
          <h1>Faça o seu Login</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#00924d" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="heroes" />
    </div>
  );
}