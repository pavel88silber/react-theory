
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

  onChangeNameHandler = (name, index) => {

    // Переменая car чтобы сохранить данную машину по индексу
    const car = this.state.cars[index]

    // Сохраняем новое полученое name в car.name
    car.name = name

    // Делаем дубликат массива машин cars: [ (из компонента App)
    // const cars = this.state.cars.concat()   // Можно и так
    const cars = [...this.state.cars]   // Rest оператор 

    // cars[index] =car    // "Владилен, зачем это?"
    this.setState({   // Задаем новое состояние
      cars: cars
      // cars  // Можно записать так, если ключ и значение совподают
    })
  }

    // Стрелочная функция не создает свой собственный контекст
    deleteHandler(index) {  
      // Делаем дубликат массива машин cars:     let потому что хотим удалить из массива (const тоже работат!)
      const cars = [...this.state.cars]
      // cars[index].name = 'Deleted Button!' 
      // УДАЛИТЬ определенный элемент .splice(индекс с какого элемента начать удалять, кол-во элем которое нужно удалить)
      cars.splice(index, 1)
      this.setState({
        cars: cars
      })
    }

  render() {                //-------------   RENDER -----------------//

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
                // onChangeTitle={this.changeTitleHandler.bind(this, car.name)}

                // Передаем метод onDelete
                onDelete={this.deleteHandler.bind(this, index)}

                onChangeName={event => this.onChangeNameHandler(event.target.value, index)}
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
