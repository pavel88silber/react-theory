
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
    pageTitle: 'React component',
    showCars: true
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  // Print in h2 from input 
  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  // Shows/Hide cars 
  toggleHandler = () => {
    this.setState({
      showCars: !this.state.showCars
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
        <br/>
        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

        <br/>
        <button onClick={this.toggleHandler}>Show/Hide Cars</button>

        { this.state.showCars
           ? this.state.cars.map((car,index) => {
              return (
                <Car 
                key={index}
                name={car.name} 
                year={car.year} 
                onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                />
                )
            })
            : null
        } 

      </div>
    )
  }
}

export default App;
