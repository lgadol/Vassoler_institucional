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
                    <p className="hero-subtitle">matue</p>
                </div>
            </section>

            {/* História */}
            <section className="sobre-section">
                <div className="sobre-texto">
                    <h2><FaHistory className="icon" /> Nossa Jornada</h2>
                    <p>
                        Tudo começou em 2003, quando nós, vindos de outra cidade, decimos recomeçar a vida com coragem e muito trabalho. Na época, era apenas uma pequena fruteira, simples, mas cheia de vontade de crescer.
                    </p>
                    <p>
                        Com o tempo, a dedicação e o carinho que fazemos questão de entregar a cada cliente fez o negócio evoluir. A fruteira deu lugar a um açougue e, depois, também a um mercado. Tudo isso montado na mesma sala onde tudo começou — a mesma onde estamos até hoje.
                    </p>
                    <p>
                        Desde o primeiro dia, o trabalho sempre foi feito em familia, sem funcionários, com muito esforço, amor e compromisso com a qualidade. Cada corte de carne, cada produto na prateleira, tudo é escolhido com cuidado, porque aqui a prioridade sempre foi oferecer confiança e bom atendimento para cada cliente que entra por nossa porta.
                    </p>
                    <p>
                        Essa é a essência do nosso açougue e mercado: uma história de família, construída com honestidade, trabalho duro e muita gratidão.
                    </p>
                </div>
                <div className="sobre-imagem">
                    <img src={require('../img/sobre2.png')}
                        alt="Açougue Vassoler" />
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
                        <p>Mais de 20 anos de experiência no mercado</p>
                    </div>
                </div>
            </section>
        </div>
    )
}