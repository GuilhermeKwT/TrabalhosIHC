import React, { useEffect, useState } from "react";
import './estilo.css'

function App(){
  const [nutri, setNutri] = useState([]);
  const [clima, setClima] = useState({
    weather: [{
      id: 0,
      main: '',
      description: '',
      icon: ''
    }]
  });

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url).then(dados => dados.json()).then(json => setNutri(json));

    let url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.3935&lon=-51.4562&appid=d2db4748fae4dcff5ff584b10b3af255&lang=pt';
    fetch(url2).then(dados2 => dados2.json()).then(json2 => setClima(json2));
  }, []);

  return(
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map(item => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>

            <em>Categoria: {item.categoria}</em>

            <img src={item.capa} alt={item.titulo} className="capa"/>

            <p className="subtitulo">{item.subtitulo}</p>

          </article>
        );
      })}
      <br/><br/>
      <strong className="climaTitulo">Clima em Guarapuava:</strong>
      
      <article className="clima">
        {clima.weather[0].description}
      </article>
        

    </div>
    
  );
}

export default App;