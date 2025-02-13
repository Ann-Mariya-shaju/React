import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incrementCount=()=> {
        this.setState((prevCount)=>({
            count:prevCount.count+1
        }) )      
    }
  render() {
    return (
      <>
     <h1 style={{color:"blue"}}>COUNTER</h1>
     <h2>COUNT:{this.state.count}</h2>
     <button onClick={this.incrementCount}>INCREMENT</button>
      </>
    )
  }
}
