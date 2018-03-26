import React, { Component } from 'react'; //Importo React de react y tambien Component (asi evito React.Component y uso Component solo)
import Reactdom, { render } from 'react-dom'; //Importo render de react-dom para mostrar datos
import App from './components/app.jsx';

class Prueba extends React.Component {
  render() {
    return (
      <h1>Hola Tonga</h1>
    ) 
  }
}

Reactdom.render(
  <App/>
  , document.getElementById('app')
);
Reactdom.render(
  <Prueba/>
  , document.getElementById('titulo')
);