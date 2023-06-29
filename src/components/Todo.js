import React, { Fragment, useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import FindTodo from './FindTodo';
const Todo = () => {
    const [todoState, setTodosState] = useState([]);
    useEffect(()=>{
        const getTodos = async ()=>{
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos?_limit=10'
                )
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message)    
            }
        }
        getTodos()
    },[])
    const markComplete = id  =>{
        const newTodos = todoState.map(todo =>{
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })
        setTodosState(newTodos);
    }  
    const deleteTodo = id =>{
        const newTodos = todoState.filter(todo=> todo.id !== id)
        setTodosState(newTodos);
    } 

    const addTodo = title =>{
        const newTodos = [...todoState,{ 
                id: uuidv4(),
                title,
                completed :false

            }]
            // = const newtodo = [{viec 1}, {viec 2}, {viec 3}, {id: 4. title, complete: false}]
            setTodosState(newTodos)
            
    }
    return (
        <div>
            <div className='row'>
                <AddTodo addTodoFunc = {addTodo}/>
            </div>
            <div className='row'>
            <FindTodo></FindTodo>
            </div>

            <section className='product'>
                <div className='container'>
                    <div className="row">

           {todoState.map(todo =>{
            return <TodoItem 
                        key= {todo.id} 
                        todoProps ={todo} 
                        markCompleteFunc = {markComplete}
                        deleteTodoFunc = {deleteTodo}
                        />
           })}
                   </div>
            </div>
        </section>

        </div>
    );
};

export default Todo;