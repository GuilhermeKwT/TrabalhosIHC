import { Link } from "react-router-dom";

const Home = () =>
    <div className="container">
        <h1>
            Bem-vindo à página HOME.
        </h1>
        
        <Link to='/sobre'>Sobre</Link>
        <Link to='/contato'>Contato</Link>
    </div>

export default Home;