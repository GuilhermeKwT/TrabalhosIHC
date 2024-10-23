import { Link } from "react-router-dom";

const Contato = () =>
    <div className="container">
        <h1>Bem-vindo à página Contato</h1>

        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
    </div>
    
export default Contato;