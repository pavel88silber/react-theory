import React from 'react'
import logo from '../logo.svg';
import './Car.css'
import Radium from 'radium'

const divStyle = {
    // height : '5rem',
    color: 'darkGreen',
    background: '#ccc',
    margin: '1rem',
    borderRadius: '8%',
    borderBottom: '1px solid black',
    borderRight: '3px solid black',
}

const car = (props) => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    if (props.name == 't e s t') {
        inputClasses.push('test')
    }

    return (
        <div>
            <div className={'Car'}>
                <img src={logo} className="App-logo" alt="logo" />
                <hr/>
                <strong>{props.name}</strong>
                <p>year: {props.year}</p>
        
                {/* {Через input передаем в props }.  value={props.name + ' '} By default*/}
                <input 
                    type="text" 
                    onChange={props.onChangeName} 
                    value={props.name + ' '}
                    className={inputClasses.join(' ')}
                /> 
        
                <button onClick={props.onDelete}>Delete!</button>
            </div>
        </div>
    )
}

export default Radium(car)




