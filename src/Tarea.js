import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Fecha from './Fecha';
import moment from 'moment';


export default class Tarea extends Component {

  vacio = (elemento) => {
      return (elemento === '');
  }

  validateFecha = (fecha) => {
    return (moment(fecha,'L',true).isValid() ||
            moment(fecha,'l',true).isValid());
  }

  addtask = (e) => {
    const iactividad=document.getElementById('actividad').value
    const ifechaIni=document.getElementById('fechaIni').value
    const ifechaFin=document.getElementById('fechaFin').value
    if (this.vacio(iactividad) || 
        this.vacio(ifechaIni) || 
        this.vacio(ifechaFin)) 
        {
          alert('Debe llenar todos los campos')
          return
        };
    /*
    if (!this.validateFecha(ifechaIni) ||
        !this.validateFecha(ifechaFin))
        {
          alert('Fecha invalida');
          return 
        }
    */
    if (moment(ifechaFin,'L') < moment(ifechaIni,'L')){
        alert('La fecha de inicio debe ser mayor o igual a la fecha de fin');
        return
    }
    const task = {
        actividad:iactividad,
        fechaIni:ifechaIni,
        fechaFin:ifechaFin,
        complete:false
    }
    document.getElementById('actividad').value = ''
    this.props.addTask(task);
  }

  render() {
    return (
      <div className='m-2' >
        <form className="form-inline">
            <label className="sr-only">Tarea</label>
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" 
            id="actividad" placeholder="Tarea"/>
            <br />
            <label className="sr-only">Fecha inicio</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <span className='fa fa-calendar pt-1 pr-1' ></span>
              Fecha Inicio <Fecha id='fechaIni'/>
            </div>
            <br />
            <label className="sr-only">Fecha Fin</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <span className='fa fa-calendar pt-1 pr-1' ></span>
              Fecha Fin <Fecha id='fechaFin'/>
            </div>
            <br />
            <div className='fa fa-plus-circle' onClick={this.addtask}></div>
        </form>
      </div>
    )
  }
}
