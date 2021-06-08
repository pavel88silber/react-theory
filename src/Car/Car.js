import React from 'react'
import logo from '../logo.svg';

const divStyle = {
    // height : '5rem',
    color: 'darkGreen',
    background: '#ccc',
    margin: '1rem',
    borderRadius: '8%',
    borderBottom: '1px solid black',
    borderRight: '3px solid black',
}

export default (props) => (
    <div style={divStyle}>
        <img src={logo} className="App-logo" alt="logo" />
        <hr/>
        <strong>{props.name}</strong>
        <p>year: {props.year}</p>

        {/* {Через input передаем в props }.  value={props.name + ' '} By default*/}
        <input type="text" onChange={props.onChangeName} value={props.name + ' '}/> 

        <button onClick={props.onDelete}>Delete!</button>
    </div>  
)



