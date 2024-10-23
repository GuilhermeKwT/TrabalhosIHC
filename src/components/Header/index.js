import { Link } from "react-router-dom"

import "./../../App.css"

const Header = () =>
    <header className="container color">
        <h2>Guilherme</h2>

        <div>
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/produto/satsuma'>Produto</Link>
        </div>
    </header>
    
export default Header;