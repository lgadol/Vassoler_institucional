import React from "react";
import '../styles/Encomendas.css';
import { FaPhoneAlt, FaClock, FaShoppingBasket, FaMoneyBillWave, FaMapMarkerAlt } from 'react-icons/fa';

export const Encomendas = () => {
    return (
        <div className="encomendas-container">
            {/* Hero Section */}
            <section className="encomendas-hero">
                <div className="hero-content">
                    <h2><FaShoppingBasket className="icon" /> Encomendas</h2>
                    <p className="hero-subtitle">Carne assada fresquinha para seu domingo em família</p>
                </div>
            </section>

            <section className="encomendasTexto-section">
                <div className="encomendas-texto">
                    <h1><FaShoppingBasket className="icon" /> Como Funciona</h1>
                    <p>
                        Aos domingos, trabalhamos com encomendas especiais para quem quer garantir aquele almoço caprichado, com praticidade e sabor.
                    </p>
                    <p>
                        As encomendas podem ser feitas pelo telefone, WhatsApp ou diretamente aqui no açougue, e pedimos que sejam realizadas no sábado, para retirada no domingo, entre 11h e meio-dia.
                    </p>
                    <p>
                        Se preferir, o cliente pode trazer sua própria forma ou recipiente para retirar a carne. Mas, se não for possível, disponibilizamos formas descartáveis, prontas para levar com segurança e praticidade.
                    </p>
                    <p>
                        Nosso carro-chefe aos domingos é o frango assado, mas também assamos outros tipos de carne, conforme a preferência do cliente — desde que, é claro, sejam compradas aqui conosco. Tudo é preparado com carinho e assado em forno industrial giratório a gás, que garante um cozimento uniforme, suculento e com aquele cheirinho irresistível.
                    </p>
                    <p>
                        Quanto ao pagamento, deixamos à escolha do cliente: pode ser feito na hora da retirada ou antecipadamente, como for mais cômodo. Para clientes que ainda não compraram conosco, é necessário realizar o pagamento antecipado como forma de confirmação do pedido. Aceitamos dinheiro, Pix, cartão e vale-alimentação.
                    </p>

                    <h2>Garanta já a sua!</h2>
                    <p>
                        Evite filas e atrasos: antecipe sua retirada e aproveite seu almoço com tranquilidade.
                        Estamos aqui para preparar tudo com o cuidado e o sabor que você já conhece e confia.
                    </p>
                    <h2>Importante:</h2>
                    <p>
                        Não cobramos nenhum valor adicional para assar. Você paga apenas o valor da carne.
                    </p>
                </div>
            </section>

            {/* Processo de Encomenda */}
            <section className="passos-encomenda">
                <h2>Resumindo</h2>

                <div className="passo">
                    <div className="passo-numero">1</div>
                    <div className="passo-conteudo">
                        <h3>Faça seu pedido</h3>
                        <p>
                            Ligue durante a semana ou passe pessoalmente no açougue para escolher
                            o corte e quantidade desejados.
                        </p>
                    </div>
                </div>

                <div className="passo">
                    <div className="passo-numero">2</div>
                    <div className="passo-conteudo">
                        <h3>Nós preparamos</h3>
                        <p>
                            No domingo de manhã, assamos sua carne com todo cuidado e tradição.
                        </p>
                    </div>
                </div>

                <div className="passo">
                    <div className="passo-numero">3</div>
                    <div className="passo-conteudo">
                        <h3>Retire no horário</h3>
                        <p>
                            Sua carne estará pronta para retirada no horário combinado,
                            quentinha e no ponto perfeito.
                        </p>
                    </div>
                </div>
            </section>

            {/* Informações Importantes */}
            <section className="info-importante">
                <h2><FaMoneyBillWave className="icon" /> Informações</h2>
                <div className="info-grid">
                    <div className="info-card">
                        <FaClock className="info-icon" />
                        <h3>Horário de Retirada</h3>
                        <p>Domingos das 11h às 12h</p>
                    </div>
                    <div className="info-card">
                        <FaPhoneAlt className="info-icon" />
                        <h3>Telefone</h3>
                        <p>(54) 3242-4702</p>
                        <p>(54) 99206-8276</p>
                    </div>
                    <div className="info-card">
                        <FaMapMarkerAlt className="info-icon" />
                        <h3>Local</h3>
                        <p>Rua Comendador Roberto Selmi Dei, 593 - Centro | Nova Prata-RS</p>
                    </div>
                </div>
            </section>
        </div>
    )
}