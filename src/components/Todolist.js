import React, {useState} from 'react'
import Todo from './Todo';
import Todoforms from "./Todoforms"

function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoid, newvalue) => {
        if(!newvalue.text || /^\s*$/.test(newvalue.text)){
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoid ? newvalue : item)))
    }
    const removeTodo = id =>{
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    }
    const completeTodo =id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id ===id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    return (
        <div>
    <h1>Plan for today:</h1>
    <Todoforms onSubmit ={addTodo}/>  
    <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo ={updateTodo}
    />      
        </div>
    )
}

export default Todolist;
