// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  handleClick = event => {
    this.setState({
      mood: "sad"
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}
