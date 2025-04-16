import React, { useState } from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import logo from '../img/1024x512.png'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContatoModal, setShowContatoModal] = useState(false);

    const toggleContatoModal = () => {
        setShowContatoModal(!showContatoModal);
        if (menuOpen) setMenuOpen(false);
    }

    return (
        <>
            <div className="cabeçalho_main">
                <div className="cabeçalho_superior">
                    <p>Bem-vindo!</p>
                </div>
                <div className="cabeçalho_medio">
                    <Link to="/"> <img src={logo} className='logo_1024x512' alt="Logo" /> </Link>
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
                        <button className="botao_cabecalho" onClick={toggleContatoModal}>Contato</button>
                        <Link to="/encomendas"><button className="botao_cabecalho">Encomendas</button></Link>
                    </div>

                    {/* Menu mobile (aparece quando o hamburger é clicado) */}
                    <div className={`menu-mobile ${menuOpen ? 'active' : ''}`}>
                        <Link to="/" onClick={() => setMenuOpen(false)}><button className="botao_cabecalho">Home</button></Link>
                        <Link to="/sobre" onClick={() => setMenuOpen(false)}><button className="botao_cabecalho">Sobre</button></Link>
                        <button className="botao_cabecalho" onClick={toggleContatoModal}>Contato</button>
                        <Link to="/encomendas" onClick={() => setMenuOpen(false)}><button className="botao_cabecalho">Encomendas</button></Link>
                    </div>
                </div>
            </div>

            {/* Modal de Contato */}
            {showContatoModal && (
                <div className="contato-modal-overlay" onClick={toggleContatoModal}>
                    <div className="contato-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="fechar-modal" onClick={toggleContatoModal}>
                            <FaTimes />
                        </button>
                        <h2>Contato</h2>
                        <div className="contato-info">
                            <div className="contato-item">
                                <FaWhatsapp className="contato-icon" />
                                <div>
                                    <h3>WhatsApp</h3>
                                    <p>(54) 99686-8439</p>
                                </div>
                            </div>
                            <div className="contato-item">
                                <FaPhone className="contato-icon" />
                                <div>
                                    <h3>Telefone</h3>
                                    <p>(54) 3242-4702</p>
                                </div>
                            </div>
                            <div className="contato-item">
                                <FaEnvelope className="contato-icon" />
                                <div>
                                    <h3>E-mail</h3>
                                    <p>acouguevassoler@gmail.com</p>
                                </div>
                            </div>
                            <div className="contato-item">
                                <FaMapMarkerAlt className="contato-icon" />
                                <div>
                                    <h3>Endereço</h3>
                                    <p>Rua Comendador Roberto Selmi Dei, 593 - Centro | Nova Prata-RS</p>
                                </div>
                            </div>
                            <div className="contato-item">
                                <FaClock className="contato-icon" />
                                <div>
                                    <h3>Horário de Funcionamento</h3>
                                    <p>Seg-Sex: 07:30 - 19:30</p>
                                    <p>Intervalo: 12:00 - 13:30</p>
                                    <p>Domingo: 07:30 - 12:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}