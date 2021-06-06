
import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '1995'},
      {name: 'Mazda', year: '2010'}
    ],
    pageTitle: 'React component'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {

    const divStyle = {
      textAlign: 'center'
    }

    // const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h2>{this.state.pageTitle}</h2>

        <input type='text' onChange={this.handleInput}/>

        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

        { this.state.cars.map((car,index) => {
          return (
            <Car 
            key={index}
            name={car.name} 
            year={car.year} 
            onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
            />
          )
        })}

      </div>
    )
  }
}

export default App;
