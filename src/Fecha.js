import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/es'
import 'react-datepicker/dist/react-datepicker.css';

class Fecha extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      //startDate: date
      startDate: date.target.value
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        id={this.props.id}
        locale='es'
    />;
  }
}

export default Fecha;