import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const tasks = [
    {actividad:'Tarea 1', fechaIni:'19/08/2018', fechaFin:'20/08/2018',complete:false},
    {actividad:'Tarea 2', fechaIni:'16/08/2018', fechaFin:'20/08/2018',complete:false},
    {actividad:'Tarea 3', fechaIni:'01/08/2018', fechaFin:'08/08/2018',complete:false},
    {actividad:'Tarea 4', fechaIni:'19/07/2018', fechaFin:'29/07/2018',complete:false}
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={tasks}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
