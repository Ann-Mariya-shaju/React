import React, { Component } from 'react'
import "../address.css"
export default class Address1 extends Component {
  render() {
    return (
        <>
        {
        this.props.isShow && 
        <div>
                        <h3>ADDRESS</h3>
                        <ul>
                            <li>Name: Ann</li>
                            <li>Location: Kakkanad</li>
                            <li>Pin: 686868</li>
                        </ul>
                    </div>
  }
        </>
      
    )
  }
}
