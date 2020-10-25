import '../app/App.css'
import React, {useState} from 'react';
import Heading from '../heading/heading';
import Input from '../input/input';
import TodoItem from '../todoItem/todoItem';
import DateElemet from '../date/date';


const App = () => {
  let item = {value: "Add Task To The List", status:"undone"};
  
  const [itemArray, setItemArray] = useState(JSON.parse(localStorage.getItem("listItem") || "[]"));
  
  const getChange = (e) => {
    item = {
      value: e.target.value,
      status: 'undone'
    };
  } 
  const addItemHandler = (e) => {
    const newArray = [...itemArray];
    if(e.target.parentNode.children[0].value !== ""){
      if(item.status === 'undone'){
        newArray.unshift(item);
        localStorage.setItem('listItem', JSON.stringify(newArray));
      }
      setItemArray(newArray);
      e.target.parentNode.children[0].value = "";
    }
    
    
    
  }
  const finishTaskHandler = (id) => {
    const cloneArray = [...itemArray];
    if(cloneArray[id].status === 'undone'){
      cloneArray[id].status = 'done';
    }else{
      cloneArray[id].status = 'undone';
    }
    setItemArray(cloneArray);
    localStorage.setItem('listItem', JSON.stringify(cloneArray));
  }
  const deletItemListHandler = (id) => {
    const cloneArray = [...itemArray];
    cloneArray.splice(id, 1);
    setItemArray(cloneArray);
    localStorage.setItem('listItem', JSON.stringify(cloneArray));
  }
  return (
    <div className="App">
      <Heading/>
      <DateElemet/>
      <ul className="listItems">
        {itemArray.map((item, index) => <TodoItem id={index} key={index} deletItemListHandler={deletItemListHandler} finishTaskHandler={finishTaskHandler} item={item}/>)
        }
      </ul>
      <Input getChange={getChange} click={addItemHandler}/>
    </div>
  );
}

export default App;
