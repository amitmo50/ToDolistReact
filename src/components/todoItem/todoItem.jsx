import React from 'react';
import './todoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks,faCheck } from '@fortawesome/free-solid-svg-icons';
const TodoItem = ({item, id, finishTaskHandler, deletItemListHandler}) => {

    return (
        <li id={id} className="todolist-group-item">
            <span onClick={() => finishTaskHandler(id)}><FontAwesomeIcon  icon={item.status === 'undone'?faTasks:faCheck} style={{color:item.status === 'undone'?"#fff":"red", fontSize:"1.1rem"}}/></span>
            <div className={item.status === 'undone'?"todolist-item":"done todolist-item"}>{item.value}</div>
            <button onClick={() => deletItemListHandler(id)} className="close-btn">&times;</button>
        </li>
        
    );  
}

export default TodoItem;