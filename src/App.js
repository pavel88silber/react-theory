
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

  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle
    const newTitle = oldTitle + '(updated!)'

    this.setState({
      pageTitle: newTitle
    })
  }






  render() {

    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h3>{this.state.pageTitle}</h3>

        <button onClick={this.changeTitleHandler}>Change title</button>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    )
  }

}

export default App;
