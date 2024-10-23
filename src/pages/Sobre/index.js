import { Link } from "react-router-dom";

const Sobre = () =>
    <div className="container">
        <h1>Bem-vindo à página Sobre</h1>

        <Link to='/'>Home</Link>
        <Link to='/contato'>Contato</Link>
    </div>

export default Sobre;