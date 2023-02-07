import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import AppRegistro from './App_Registro'

const tasks = [
    {actividad:'Tarea 1', fechaIni:'19/08/2018', fechaFin:'20/08/2018',complete:false},
    {actividad:'Tarea 2', fechaIni:'16/08/2018', fechaFin:'20/08/2018',complete:false},
    {actividad:'Tarea 3', fechaIni:'01/08/2018', fechaFin:'08/08/2018',complete:false},
    {actividad:'Tarea 4', fechaIni:'19/07/2018', fechaFin:'29/07/2018',complete:false},
    {actividad:'Tarea 5', fechaIni:'01/10/2019', fechaFin:'08/08/2018',complete:false},
    {actividad:'Tarea 6', fechaIni:'12/02/2020', fechaFin:'29/07/2018',complete:false},
    {actividad:'Tarea 7', fechaIni:'20/11/2020', fechaFin:'08/08/2018',complete:false},
    {actividad:'Tarea 8', fechaIni:'07/04/2019', fechaFin:'29/07/2018',complete:false}
]


ReactDOM.render(
  <React.StrictMode>
    <App tasks={tasks}/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <AppRegistro />
  </React.StrictMode>,
  document.getElementById('root')
);
*/