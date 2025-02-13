import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {
        return (
            <div>
                <h3>Contact Details</h3>
                {
                    // if else
                    this.props.firstName === 'Sean' ?
            <div>
            
            <h5>Mobile Number:8281155748</h5>
            <h5>Email:sean@gmail.com</h5>
            </div>
             :
             // else
           <h5>User Dont Want to share the contact details</h5>
        }

            </div>
        )
    }
}
