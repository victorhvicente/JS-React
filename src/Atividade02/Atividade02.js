import { Link } from "react-router-dom";
import Contador from "./Contador";

function Atividade02() {
    return (

        <>
            <h1>Atividade 02</h1>
            <Contador />
            <Link to="/">Voltar</Link>
        </>

    );
}

export default Atividade02;