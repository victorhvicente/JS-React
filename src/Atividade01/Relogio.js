import React, { useState, useEffect } from 'react';

function Relogio() {

  const [hora, setHora] = useState('');

  const atualizarHorario = () => {
    const agora = new Date();
    const horaAtual = agora.getHours().toString().padStart(2, '0');
    const minutoAtual = agora.getMinutes().toString().padStart(2, '0');
    const segundoAtual = agora.getSeconds().toString().padStart(2, '0');

    setHora(`${horaAtual}:${minutoAtual}:${segundoAtual}`);
  };

  useEffect(() => {
    atualizarHorario(); // Atualiza a hora imediatamente ao montar o componente
    const intervalId = setInterval(atualizarHorario, 1000); // Atualiza a hora a cada segundo

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div>
      <h1 style={{color: 'blue'}}>Meu Relogio</h1>
      <h1>{hora}</h1>
    </div>
  );
}

export default Relogio;
