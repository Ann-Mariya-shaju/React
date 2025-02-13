

// state
// ---------------------------------

import React, { Component } from 'react'

export default class Random extends Component {
    constructor() {
        super();
        this.state = {
            carName: "KIA"
        }
    }
    changeCar(name) {
        this.setState({ carName: name })
    }

    render() {
        return (
            <>
                <h2 style={{ color: "blue" }}>My Car Name</h2>
                <h3>Car: {this.state.carName} </h3>
                <button onClick={() => this.changeCar("swift")}>CHANGE CAR</button>
            </>
        )
    }
}
