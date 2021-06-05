import React from 'react'
import logo from '../logo.svg';

const dviStyle = {
    // height : '5rem',
    color: 'violet',
    background: 'yellow',
    border: '1px solid black',
    margin: '1rem',
    borderRadius: '8%',
}

// function car() {
//     return (
//         <div style={dviStyle}>
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//                 This is component
//             </p>
//         </div>
//     )
// }

// const car = () => {
//     return (
//     <div style={dviStyle}>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             This is component
//         </p>
//     </div>

//     )
// }

// const car = () => 
//     <div style={dviStyle}>
//         <img src={logo} className="App-logo" alt="logo" />
//             <p>This is component</p>
//     </div>
// export default car


export default props => (
    <div style={dviStyle}>
        <img src={logo} className="App-logo" alt="logo" />
        { props.children }
        <p>This is component</p><strong>{Math.round(Math.random()*100)}</strong>
        <hr></hr>
        <strong>{props.name}</strong>
        <p>year: {props.year}</p>
    </div>  
)