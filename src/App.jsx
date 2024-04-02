// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {Component} from "react"

export default class App extends Component{
  constructor(){
    super()
    this.state = {count : 0}
  }

  incrementing = () =>{
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementing = () =>{
    this.setState({
      count: this.state.count - 1
    })
  }

  reset = () => {
    this.setState({
      count: this.setState.count = 0
    })
  }
  
  render(){
    return(
    <div>
      <div id = "count">Count = {this.state.count}</div>
    <button className = "btn" onClick={this.incrementing}>+</button>

      <button  className = "btn" onClick={this.decrementing}>-</button>

      <button className = "btn" onClick={this.reset}>Reset</button>
    </div>)
  

  } 
}