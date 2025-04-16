import React from "react";
import '../styles/Sobre.css';
import { FaHistory, FaUsers, FaLeaf, FaAward } from 'react-icons/fa';

export const Sobre = () => {
    return (
        <div className="sobre-container">
            {/* Hero Section */}
            <section className="sobre-hero">
                <div className="hero-content">
                    <h1>Nossa História</h1>
                    <p className="hero-subtitle">Tradição e qualidade desde 1995</p>
                </div>
            </section>

            {/* História */}
            <section className="sobre-section">
                <div className="sobre-texto">
                    <h2><FaHistory className="icon" /> Nossa Jornada</h2>
                    <p>
                        Fundado em 1995, o Açougue e Mercado Vassoler começou como um pequeno negócio familiar 
                        no coração da cidade. Com o tempo, através de muito trabalho e dedicação, nos tornamos 
                        referência em qualidade e atendimento na região.
                    </p>
                    <p>
                        Nosso segredo? A paixão por cortes selecionados e o compromisso com cada cliente que 
                        entra pela nossa porta.
                    </p>
                </div>
                <div className="sobre-imagem">
                    {/* Substitua pela sua imagem */}
                    <div className="imagem-placeholder"></div>
                </div>
            </section>

            {/* Diferenciais */}
            <section className="diferenciais">
                <h2>O Que Nos Diferencia</h2>
                <div className="diferenciais-grid">
                    <div className="diferencial-card">
                        <FaUsers className="diferencial-icon" />
                        <h3>Atendimento Familiar</h3>
                        <p>Tratamos cada cliente como parte da nossa família</p>
                    </div>
                    <div className="diferencial-card">
                        <FaLeaf className="diferencial-icon" />
                        <h3>Qualidade Premium</h3>
                        <p>Carnes selecionadas dos melhores fornecedores</p>
                    </div>
                    <div className="diferencial-card">
                        <FaAward className="diferencial-icon" />
                        <h3>Tradição</h3>
                        <p>Mais de 25 anos de experiência no mercado</p>
                    </div>
                </div>
            </section>

            {/* Equipe */}
            <section className="equipe-section">
                <h2>Conheça Nossa Equipe</h2>
                <p>
                    Nossa equipe é formada por profissionais dedicados que compartilham o mesmo 
                    compromisso com a qualidade e o atendimento personalizado.
                </p>
                {/* Adicione fotos da equipe aqui */}
            </section>
        </div>
    )
}