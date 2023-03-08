import React, { Component } from 'react';
import Tarea from './comp_App/Tarea';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      editIndex: '',
      renAddTask: <Tarea addTask={this.addTask}/>
    }
    moment.locale('es');
  }

  addTask = (task) => {
    console.log(task)
    const tempTasks = this.state.tasks
    tempTasks.push(task);
    this.setState({tasks: tempTasks})
  }

  removeTask = (index, actividad) => {
    console.log(`${actividad} removida`)
    const tempTasks = this.state.tasks;
    tempTasks.splice(index,1);
    this.setState({tasks:tempTasks});
  }

  saveTask = (task) => {
    console.log(task)
    this.setState((prevState) => {
      const tempTasks = prevState.tasks
      tempTasks[task.index] = task;
      return {
        tasks: tempTasks,
        editIndex: '',
        renAddTask: <Tarea addTask={this.addTask}/>
      }
    })
  }

  editTask = (index) => {
    this.setState({
      editIndex: index,
      renAddTask: ''
    })
  }

  cancelUpdateTask = () => {
    this.setState({
      editIndex: '',
      renAddTask: <Tarea addTask={this.addTask}/>
    })
  }

  completeTask = (index) => {
    const tempTasks = this.state.tasks;
    if (tempTasks[index].complete === false) {
      tempTasks[index].complete = true;
    } else if (tempTasks[index].complete === true) {
      tempTasks[index].complete = false;
    }
    this.setState({tasks:tempTasks});
  }

  manejoOnClick = (e, index, actividad) => {
    if (e.target.id === 'remove') this.removeTask(index, actividad);
    else if (e.target.id === 'edit') this.editTask(index);
    else if (e.target.id === 'complete') this.completeTask(index);
  }

  componentDidMount(){
    console.log(this.state.tasks)
  }

  componentDidUpdate(){
    console.log(this.state.tasks)
  }

  render() {

    const renTask = this.state.tasks.map((task,index) => {
      var styleStatus = 'text-secondary'
      styleStatus = task.complete ? 'text-success' : styleStatus;
      const edit = this.state.editIndex === index ?
                <div className={'row pl-3 m-0'}>
                  <Tarea 
                    saveTask={this.saveTask} 
                    index={index} 
                    task={task}
                    cancelUpdateTask={this.cancelUpdateTask}
                  />
                </div>
                : '' ;
      return (
          <div className='row p-1 text-center border border-primary m-1' key={index}>
            <div className={'col-md-6 col-12 '+styleStatus} >{task.actividad}</div>
            <div className={'col-md-2 col-4 '+styleStatus} >{task.fechaIni}</div>
            <div className={'col-md-2 col-4 '+styleStatus} >{task.fechaFin}</div>
            <div className='col-md-2 col-4'>
              <div className='justify-content-end mx-0'>
              <span className='fa fa-check-square pr-2 m-1' id='complete'
                onClick={(e) => this.manejoOnClick(e, index)}></span>
              <span className='fa fa-trash pr-2 m-1' id='remove'
                onClick={(e) => this.manejoOnClick(e, index, task.actividad)}></span>
              <span className='fa fa-edit pr-2 m-1' id='edit'
                onClick={(e) => this.manejoOnClick(e, index)}></span>
              </div>
            </div>
            {edit}
          </div>
      )
    });

    return (
      <div className="container border border-info rounded m-2 mx-auto">
        <div className='row border-bottom mb-1 ' >
          <div className='col-12 h1 text-center'>Lista de Tareas</div>
        </div>
        {renTask}
        <hr />
        {this.state.renAddTask && <div className='row m-1 ' >
          <div className='col-12 h3 text-center'>Ingresar nueva tarea</div>
        </div>}
        {this.state.renAddTask}
      </div>
    );

  }
}

export default App;
