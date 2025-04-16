import React from "react";
import '../styles/Footer.css';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className="rodape_main">
            <div className="rodape_superior">
                <div className="rodape_coluna">
                    <h3>Contato</h3>
                    <p><FaPhone /> (54) 3242-4702</p>
                    <p><FaWhatsapp /> (54) 99206-8276</p>
                    <p><FaEnvelope /> acouguevassoler@gmail.com</p>
                </div>

                <div className="rodape_coluna">
                    <h3>Localização</h3>
                    <p><FaMapMarkerAlt /> Rua Comendador Roberto Selmi Dei, 593 - Centro | Nova Prata-RS</p>
                </div>

                <div className="rodape_coluna">
                    <h3>Horário de Funcionamento</h3>
                    <p><FaClock /> Seg-Sáb: 07:30 - 19:30</p>
                    <p><FaClock /> Intervalo: 12:00 - 13:30</p>
                    <p><FaClock /> Domingo: 07:30 - 12:00</p>
                </div>
            </div>
            <div className="rodape_inferior">
                <p>
                    © {new Date().getFullYear()} Pedro Henryke Gado.
                    Todos os direitos reservados.
                    <a href="mailto:pedrogadodev@gmail.com"> pedrogadodev@gmail.com</a>
                </p>
            </div>
        </div>
    )
}