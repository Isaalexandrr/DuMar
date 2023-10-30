import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const estiloDeFundo = {
    backgroundColor: '#538AAD', // Substitua pela cor desejada
    color: '#ffffff', // Cor do texto
    minHeight: '100vh', // Para garantir que o fundo se estenda até o final da página
    
  
  };
  

  return (
    <div style={estiloDeFundo}>
      <p className="font-custom">DuMar</p>
  
    
    </div>
    
  );
}



export default App;
