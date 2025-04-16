import React, { useState } from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import logo from '../img/1024x512.png'
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="cabeçalho_main">
                <div className="cabeçalho_superior">
                    <p>Bem-vindo!</p>
                </div>
                <div className="cabeçalho_medio">
                    <Link to="/"> <img src={logo} className='logo_1024x512' /> </Link>
                </div>
                <div className="cabeçalho_inferior">
                    {/* Botão do menu hamburger (visível apenas em mobile) */}
                    <button
                        className="menu-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Menu normal (desktop) */}
                    <div className={`menu-desktop ${menuOpen ? 'active' : ''}`}>
                        <Link to="/"><button className="botao_cabecalho">Home</button></Link>
                        <Link to="/sobre"><button className="botao_cabecalho">Sobre</button></Link>
                        <Link to="/contato"><button className="botao_cabecalho">Contato</button></Link>
                        <Link to="/encomendas"><button className="botao_cabecalho">Encomendas</button></Link>
                    </div>

                    {/* Menu mobile (aparece quando o hamburger é clicado) */}
                    <div className={`menu-mobile ${menuOpen ? 'active' : ''}`}>
                        <Link to="/" onClick={() => setMenuOpen(false)}><button className="botao_cabecalho">Home</button></Link>
                        <Link to="/sobre" onClick={() => setMenuOpen(false)}><button className="botao_cabecalho">Sobre</button></Link>
                        <Link to="/contato" onClick={() => setMenuOpen(false)}><button className="botao_cabecalho">Contato</button></Link>
                        <Link to="/encomendas" onClick={() => setMenuOpen(false)}><button className="botao_cabecalho">Encomendas</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}