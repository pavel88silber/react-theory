import React from 'react'
import logo from '../logo.svg';
import './Car.css'
// import Radium from 'radium'

const divStyle = {
    // height : '5rem',
    color: 'darkGreen',
    background: '#ccc',
    margin: '1rem',
    borderRadius: '8%',
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
    ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)'
    }
}

class Car extends React.Component {
    render() {
        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }
    
        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }
    
        if (this.props.name === 't e s t') {
            inputClasses.push('test')
        }
    
        return (
            <div>
                <div className={'Car'} style={divStyle}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <hr/>
                    <strong>{this.props.name}</strong>
                    <p>year: {this.props.year}</p>
            
                    {/* {Через input передаем в props }.  value={props.name + ' '} By default*/}
                    <input 
                        type="text" 
                        onChange={this.props.onChangeName} 
                        value={this.props.name + ' '}
                        className={inputClasses.join(' ')}
                    /> 
            
                    <button onClick={this.props.onDelete}>Delete!</button>
                </div>
            </div>
        )
    
    }
}


// export default Radium(Car)
export default Car




