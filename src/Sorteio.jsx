import React, { useState } from 'react';
import './Sorteio.css';

function Sorteio() {
  let [numero, setNumero] = useState(null);

  let sortearNumero = () => {
    let numeroSorteado = Math.floor(Math.random() * 100) + 1; 
    setNumero(numeroSorteado);
  };

  return (
   

    <div className="sorteio-container">

      <h1 className="titulo">Sortear Número 🎲</h1>
      <button className="botao" onClick={sortearNumero}>Sortear</button>
      {numero && <p className="resultado">Número sorteado: {numero}</p>}

    </div>

    
    
  );
}

export default Sorteio;
