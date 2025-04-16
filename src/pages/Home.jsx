import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import banner from '../img/banner.png';
import sobre from '../img/sobre.png';
import visitar from '../img/visitar.png';
import encomendas from '../img/encomendas.png';

export const Home = () => {

    return (
        <div className="home_main">
            <a href="https://wa.me/5554996868439" target="_blank" rel="noopener noreferrer">
                <img src={banner} className='banner_encomenda' alt="WhatsApp" />
            </a>
            <div className="conjunto_atalhos">
                <Link to="/sobre" className="atalho_link">
                    <img src={sobre} className='atalho_img' alt="Sobre Nós" />
                </Link>
                <a
                    href="https://maps.app.goo.gl/n6spc21eWG2swvdQ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atalho_link"
                >
                    <img src={visitar} className='atalho_img' alt="Venha nos Visitar" />
                </a>
                <Link to="/encomendas" className="atalho_link">
                    <img src={encomendas} className='atalho_img' alt="Como são as encomendas" />
                </Link>
            </div>
        </div>
    )
}