<<<<<<< HEAD
import React, {useState} from 'react';
import './Contador.css';
import homemImagem from './img/homem.png';
import mulherImagem from './img/mulher.png';

export default function Contador() {

    const [contadorHomem, setContadorHomem] = useState(0);
    const [contadorMulher, setContadorMulher] = useState(0);

    function resetarContador(){
        setContadorHomem(0);
        setContadorMulher(0);
    }

    function decrementarHomem(){
        if(contadorHomem > 0){
            setContadorHomem(contadorHomem - 1);
        }
    }

    function decrementarMulher(){
        if(contadorMulher > 0){
            setContadorMulher(contadorMulher - 1);
        }
    }

    return (
        <>
            <div className='contador'>
                <div className='topo'>
                    <div className='caixa-total'>
                        <h1>Total</h1>
                        <div className='total'> 
                            {contadorHomem + contadorMulher}
                        </div>
                    </div>
                    <div className='botao-reset'>
                        <button onClick={() => resetarContador()}></button>
                    </div>
                </div>

                <div className='caixa-homem-mulher'>
                    <div className='homem'>
                        <img src={homemImagem}/>
                        <div className='botoes-homem'>
                            <button className='botao-incrementar-homem' onClick={()=> setContadorHomem(contadorHomem + 1)}></button>
                            <button className='botao-decrementar-homem' onClick={decrementarHomem}></button>
                        </div>
                        <h3>Homens</h3>
                        <div className='total'> 
                            {contadorHomem}
                        </div>
                    </div>

                    <div className='mulher'>
                        <img src={mulherImagem}/>
                        <div className='botoes-mulher'>
                            <button className='botao-incrementar-mulher' onClick={()=> setContadorMulher(contadorMulher + 1)}></button>
                            <button className='botao-decrementar-mulher' onClick={decrementarMulher}></button>
                        </div>
                        <h3>Mulheres</h3>
                        <div className='total'> 
                            {contadorMulher}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
=======
import React, {useState} from 'react';
import './Contador.css';
import homemImagem from './img/homem.png';
import mulherImagem from './img/mulher.png';

export default function Contador() {

    const [contadorHomem, setContadorHomem] = useState(0);
    const [contadorMulher, setContadorMulher] = useState(0);

    function resetarContador(){
        setContadorHomem(0);
        setContadorMulher(0);
    }

    function decrementarHomem(){
        if(contadorHomem > 0){
            setContadorHomem(contadorHomem - 1);
        }
    }

    function decrementarMulher(){
        if(contadorMulher > 0){
            setContadorMulher(contadorMulher - 1);
        }
    }

    return (
        <>
            <div className='contador'>
                <div className='topo'>
                    <div className='caixa-total'>
                        <h1>Total</h1>
                        <div className='total'> 
                            {contadorHomem + contadorMulher}
                        </div>
                    </div>
                    <div className='botao-reset'>
                        <button onClick={() => resetarContador()}></button>
                    </div>
                </div>

                <div className='caixa-homem-mulher'>
                    <div className='homem'>
                        <img src={homemImagem}/>
                        <div className='botoes-homem'>
                            <button className='botao-incrementar-homem' onClick={()=> setContadorHomem(contadorHomem + 1)}></button>
                            <button className='botao-decrementar-homem' onClick={decrementarHomem}></button>
                        </div>
                        <h3>Homens</h3>
                        <div className='total'> 
                            {contadorHomem}
                        </div>
                    </div>

                    <div className='mulher'>
                        <img src={mulherImagem}/>
                        <div className='botoes-mulher'>
                            <button className='botao-incrementar-mulher' onClick={()=> setContadorMulher(contadorMulher + 1)}></button>
                            <button className='botao-decrementar-mulher' onClick={decrementarMulher}></button>
                        </div>
                        <h3>Mulheres</h3>
                        <div className='total'> 
                            {contadorMulher}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
>>>>>>> 6c10e0e1d7457779598a3677623194481e4c2cea
