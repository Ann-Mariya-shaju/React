import React, { Component } from 'react'

export default class UserType extends Component {
  render() {
    return (
        <>
        <div>
      <h3>UserType</h3>
      {
        this.props.Userage >=18?
        <h4 style={{color:'green'}}>User is major</h4>:
        <h4>User is minor</h4>
      }
      
      </div>
        </>
      
    )
  }
}
