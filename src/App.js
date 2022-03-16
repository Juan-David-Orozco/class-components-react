import React, { Component } from 'react';
import './App.css';
import Tarea from './Tarea';

class App extends Component {

  constructor(props){
    super(props);
    this.state={tasks:this.props.tasks}
  }

  addTask = (task) => {
    this.setState((prevState) => {
      const tempTasks = prevState.tasks
      tempTasks.push(task);
      return {tasks:tempTasks}
    })
  }

  render() {
    const renTask = this.state.tasks.map((task,index) => {
      return (
          <div className='row p-1' key={index}>
            <div className='col-8 ' >{task.actividad}</div>
            <div className='col-2' >{task.fechaIni}</div>
            <div className='col-2' >{task.fechaFin}</div>
          </div>
      )
    });
    return (
      <div className="conteiner-fluid border rounded m-2">
        <div className='row border-bottom m-0' >
          <div className='col-12 h1 text-center'>Lista de Tareas</div>
        </div>
        {renTask}
        <Tarea addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
