import {Link} from "react-router-dom";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";

function Atividade01() {
    return(

         <>
            <h1>Atividade 01</h1>
            <Relogio/>
            <Letreiro/>
            <Link to="/">Voltar</Link>
        </>

    );
}

export default Atividade01;
