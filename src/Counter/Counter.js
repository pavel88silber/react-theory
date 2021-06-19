import React, { Component } from 'react'
import Auxiliary from '../Auxiliary/Auxiliary'


export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {

        // this.setState({
        //     counter: this.state.counter + 1
        // }) 

        // ПРАВИЛНЫЙ способ для setState
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
 
        const divStyle = {
            border: '1px solid black',
            margin: '2rem',
            padding: '1rem',
            borderRadius: '8%',
            background: 'pink'
        }
            return (
                <Auxiliary style={divStyle}>
                    <h2>Counter {this.state.counter}</h2>
                    <button onClick={this.addCounter}>+</button>
                    {/* Inline event function */}
                    <button onClick={this.minusCounter = () => {this.setState({counter: this.state.counter - 1})}}>-</button>
                </Auxiliary>

            )
        // return (
            // <div style={divStyle}>
            //     <h2>Counter {this.state.counter}</h2>
            //     <button onClick={this.addCounter}>+</button>
            //     {/* Inline event function */}
            //     <button onClick={this.minusCounter = () => {this.setState({counter: this.state.counter - 1})}}>-</button>
            // </div>

            // <React.Fragment>

            // </React.Fragment>
        // )

                // // FRAGMENTS adding key in all elem
                // return [
                // <h2 key={'1'}>Counter {this.state.counter}</h2>,
                // <button key={'2'} onClick={this.addCounter}>+</button>,
                // <button key={'3'} onClick={this.minusCounter = () => {this.setState({counter: this.state.counter - 1})}}>-</button>
                // ]
                
                                // // FRAGMENTS adding key in all elem
                // return [
                //     <h2 key={'1'}>Counter {this.state.counter}</h2>,
                //     <button key={'2'} onClick={this.addCounter}>+</button>,
                //     <button key={'3'} onClick={this.minusCounter = () => {this.setState({counter: this.state.counter - 1})}}>-</button>
                // ]

    }
}