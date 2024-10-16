import React, {useState} from 'react';

const text = "Venha estudar na Fatec"

function Letreiro() 
{
  const [count, setCount] = useState(0);

  if (count <= text.length) setTimeout(()=>setCount(count + 1),300)
  else setCount(0);

  return (

  <div>

    <h1 style={{ color: 'red' }}>Meu Letreiro</h1>
    <h1>{text.slice(0,count)}</h1>

  </div>
  
  );
}

export default Letreiro;