import React, { Component } from 'react'

 class Random extends Component {
  render() {
    console.log("Data from parent component");
    console.log(this.props);
    console.log(this.props.userMessage);
    
    
    
    return (
      <>
        <div>Random</div>
        <h3>{this.props.userMessage}</h3>
      </>
    
    )
  }
}
export default Random;