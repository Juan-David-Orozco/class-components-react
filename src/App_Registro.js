import React, { Component } from 'react'
import Form from './comp_AppRegistro/Form'

export default class App_Registro extends Component {
  render() {
    return (
      <div className="App">
        <Form
          formName='Registro Personal' input1='Primer Nombre' input2='Apellido'
          input3='Correo Electrónico' input4='Contraseña' input5='Dirección'
          input6='País' input7='Código Postal' buttonName='Guardar'
        />
      </div>
    )
  }
}
