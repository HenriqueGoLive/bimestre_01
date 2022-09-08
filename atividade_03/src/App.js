import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

function App() {

  const [result, setResult] = useState(0);
  const [numero, setNumero] = useState(0);

  function Somador(){
    setResult(parseInt(result) + parseInt(numero));
  }
  function Diminuir(){
    setResult(result - numero);
  }
  function Resetar(){
    setResult(0);
  }


  return (
    <div className="App">
      
      <h1>Somando e Diminuindo</h1>
      <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)}/>

      <p/>

      <button onClick={Somador}>Somar</button>
      <button onClick={Diminuir}>Subtrair</button>
      <button onClick={Resetar}>Reset</button>

      <p/>

      <h1>{result}</h1>

    </div>
  );
}

export default App;
