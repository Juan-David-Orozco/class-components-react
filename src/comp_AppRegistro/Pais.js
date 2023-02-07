import React, { Component } from 'react'

export default class Pais extends Component {
  manejoOnClick = (e,countryName) => {
    this.props.colocarPais(countryName);
  }
  render() {
    return (
      <button
        type="button" className="list-group-item list-group-item-action"
        id={this.props.countryName}
        onClick={(e) => this.manejoOnClick(e, this.props.countryName)}
      >
        {this.props.countryName}
      </button>
    )
  }
}
