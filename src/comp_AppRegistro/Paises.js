import React, { Component } from 'react'
import Pais from './Pais';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/font-awesome/css/font-awesome.css'

export default class Paises extends Component {

  constructor(props){
    super(props);
    this.state = {
      paises: this.props.paises
    }
  }

  colocarPais = (nombrePais) => {
    this.props.colocarPais(nombrePais);
  }

  render() {
    var paises = <option>Seleccione un País</option>
    if (this.props.buscarPais){
      if (this.state.paises) {
        paises = this.state.paises.geonames.map((pais, index) => {
          if (pais.countryName.toUpperCase().indexOf(this.props.buscarPais.toUpperCase())===0)
            return (
              <Pais countryCode={pais.countryCode} countryName={pais.countryName} key={index}
                colocarPais={this.colocarPais}/>
            )
        })
      }
    }

    return (
      <div className='list-group' id='lista_paises'>
        {paises}
      </div>
    )
  }

}
