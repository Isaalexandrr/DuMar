import React, { useState } from 'react';
import './BotaoAdicionar.css'; 
import styled from '@emotion/styled';


const BotaoAdicionar = ( ) => {
  const [quantidadeItens, setQuantidadeItens] = useState(1);

  const handleAdicionarItem = () => {
    setQuantidadeItens(quantidadeItens + 1);
  };

  const handleRemoverItem = () => {
    if (quantidadeItens > 1) {
      setQuantidadeItens(quantidadeItens - 1);
    }
  };

  return (
    <div className="botao-adicionar-remover-container">
      <div className="grid-caixa">
        <div className="grid-item">
          <button className="botao-remover"  onClick={handleRemoverItem}>
            -
          </button>
          <span className="quantidade-itens">{quantidadeItens}</span>
          <button className="botao-adicionar" onClick={handleAdicionarItem}>
            +
          </button>
        </div>
      </div>
    </div>


  );
};

export default BotaoAdicionar;

