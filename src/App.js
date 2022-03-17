import React, { Component } from 'react';
import './App.css';
import Tarea from './Tarea';
import moment from 'moment';

class App extends Component {

  constructor(props){
    super(props);
    this.state={tasks:this.props.tasks}
    moment.locale('es');
  }

  addTask = (task) => {
    this.setState((prevState) => {
      const tempTasks = prevState.tasks
      tempTasks.push(task);
      return {tasks:tempTasks}
    })
  }

  removeTask = (index) => {
    console.log(`Tarea: ${index+1} removida`)
    /* Propio - uso de estado actual */
    const tempTasks = this.state.tasks;
    tempTasks.splice(index,1);
    this.setState({tasks:tempTasks});
    
    /* NextU - Uso estado previo (prevState) 
    this.setState((prevState) => {
      const tempTasks = prevState.tasks;
      tempTasks.splice(index,1);
      return {tasks:tempTasks}
    })
    */
  }

  completeTask = (index) => {
    const tempTasks = this.state.tasks;
    tempTasks[index].complete = true;
    this.setState({tasks:tempTasks});
  }

  manejoOnClick = (e, index) => {
    if (e.target.id === 'remove') this.removeTask(index);
    else if (e.target.id === 'complete') this.completeTask(index);
  }

  render() {
    const renTask = this.state.tasks.map((task,index) => {
      var styleStatus = 'text-secondary'
      var fecha = Date.now()
      styleStatus = (Number(moment(task.fechaFin,'L')+86399999) - fecha) < 86400000 ? 'text-warning': styleStatus;
      styleStatus = (Number(moment(task.fechaFin,'L')+86399999) - fecha) < 0 ? 'text-danger': styleStatus; 
      styleStatus = (moment(task.fechaIni,'L') < fecha && moment(task.fechaFin,'L') > fecha) ? 'text-primary' : styleStatus; 
      styleStatus = task.complete ? 'text-success' : styleStatus;
      return (
          <div className='row p-1 text-center' key={index}>
            <div className={'col-6 '+styleStatus} >{task.actividad}</div>
            <div className={'col-2 '+styleStatus} >{task.fechaIni}</div>
            <div className={'col-2 '+styleStatus} >{task.fechaFin}</div>
            <div className='col-2'>
              <div className='justify-content-end mx-0'>
              <span className='fa fa-check pr-2' id='complete'
                onClick={(e) => this.manejoOnClick(e, index)}></span>
              <span className='fa fa-remove pr-2' id='remove'
                onClick={(e) => this.manejoOnClick(e, index)}></span>
              </div>
            </div>
          </div>
      )
    });
    return (
      <div className="container border border-info rounded m-2 mx-auto">
        <div className='row border-bottom m-0 ' >
          <div className='col-12 h1 text-center'>Lista de Tareas</div>
        </div>
        {renTask}
        <hr />
        <div className='row m-1 ' >
          <div className='col-12 h3 text-center'>Ingresar nueva tarea</div>
        </div>
        <Tarea addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
