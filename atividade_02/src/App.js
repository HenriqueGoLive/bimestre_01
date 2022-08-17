import logo from './logo.svg';
import './App.css';
import Eventos from './components/Eventos';
import TipoIngresso from './components/TipoIngresso';

function App() {
    return ( 
      <div className = "App" >

      <Eventos 
      nome="Gustavo Lima" 
      data="2 de agosto de 2019(Sexta-Feira)" 
      horario="18h30 - 00h00"
      local="Parque do Povo"
      cidade="Campinas Grande/PR"
      genero="Arte em forma de SERTANEJO"
      />
      <TipoIngresso
      ingressos="Ingressos"
      ingressos1="Camarote(open bar)"
      preco1="R$150,00"
      ingressos2="Camarote"
      preco2="R$100,00"
      ingressos3="Front-stage"
      preco3="R$60,00"
      ingressos4="Pista"
      preco4="R$30,00"
      />

      </div> 
    );
}

export default App;