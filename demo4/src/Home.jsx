import React, { Component } from 'react'

export default class Home extends Component {
  render() {
   
    return (
        <>
        <div>Home</div>
        <h3>Name:{this.props.firstName}</h3>
        { <h3>Location:{this.props.place}</h3> }
        </>
      
    )
  }
}
