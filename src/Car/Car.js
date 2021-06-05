import React from 'react'
import logo from '../logo.svg';

const dviStyle = {
    // height : '5rem',
    color: 'violet',
    background: 'yellow'
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

const car = () => 
    <div style={dviStyle}>
        <img src={logo} className="App-logo" alt="logo" />
            <p>This is component</p>
    </div>
export default car