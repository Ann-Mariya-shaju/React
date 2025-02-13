import React, { Component } from 'react'
import styles from './myStyle.module.css'

function UserDetails() {
  
    return (
        <>
      <h3 className= {styles.firstName}>Name : Sean</h3>
      <h4 id= {styles.location}>location: kochi</h4>
      </>
    )
  }


export default UserDetails
