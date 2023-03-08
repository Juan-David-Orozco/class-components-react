import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'moment/locale/es'
import 'react-datepicker/dist/react-datepicker.css'

class Fecha extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        className='form-control'
        selected={this.state.startDate}
        onChange={this.handleChange}
        id={this.props.id}
    />;
  }

}

export default Fecha;