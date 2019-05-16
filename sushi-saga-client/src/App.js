import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      sushis: [],
      consumedSushi: [],
      budget: 200,
      numPurchased: 0
    }

    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      console.log({sushis})
      this.setState({sushis})
    })
  }

  eatSushi(sushi) {
    if (this.state.consumedSushi.includes(sushi)) {
      return
    }
    if (sushi.price > this.state.budget) {
      return
    }
    let consumedSushi = [...this.state.consumedSushi]
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}/>
        <Table numPurchased={this.state.numPurchased}/>
      </div>
    );
  }
}

export default App;