import React from 'react';
import './input.css'
const Input = ({getChange, click}) => {
    
    return (
        <div className="input-container">
            <input onChange={getChange} className="input-text" type="text" placeholder="Add Task"></input>
            <button onClick={click} type="submit" className="input-btn">Add</button>
        </div>
    );
}
export default Input;