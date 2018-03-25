import React, { Component } from 'react'; //Importo React de react y tambien Component (asi evito React.Component y uso Component solo)
import Reactdom, { render } from 'react-dom'; //Importo render de react-dom para mostrar datos

class Prueba extends React.Component {
  render() {
    return (
      <h1>Hola Mundo</h1>
    ) 
  }
}

Reactdom.render(
  <Prueba/>
  , document.getElementById('app')
);