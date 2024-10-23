import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Tadala from "./pages/Produto/Satsuma"
import Erro from "./pages/Erro"

import Header from "./components/Header"

const RoutesApp = () =>
    <BrowserRouter>

        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/produto/satsuma' element={<Tadala/>}/>
            <Route path='*' element={<Erro/>}/>
        </Routes>

    </BrowserRouter>

export default RoutesApp;