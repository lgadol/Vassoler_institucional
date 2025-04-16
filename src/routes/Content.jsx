import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Encomendas } from '../pages/Encomendas';
import { Sobre } from '../pages/Sobre';

export const Content = () => {
    return (
        <main className="main_content">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/encomendas' element={<Encomendas />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
        </main>
    )
}