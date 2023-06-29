import React, { useState } from 'react';
import PropTypes from 'prop-types'
const AddTodo = props => {
    const addTodo = props.addTodoFunc
    const [title, setTitle] = useState('')

    const AddTodoFormStyle ={
        display: 'flex'
    }
    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
      }
    const changeTitle = event =>{
        setTitle(event.target.value)
    }
    const addSingleTodo = event =>{
        event.preventDefault()
        
            if (title !=='') {
                addTodo(title)
                setTitle('')
            }
    }
    return (
        <form style={AddTodoFormStyle} onSubmit={addSingleTodo}>
            <div class="input-group mb-3">
                <input 
                    className='form-control'
                    type='text'    
                    name="title" 
                    placeholder='tittle' 
                    style={addTodoInputStyle}
                    value={title}
                    onChange={changeTitle}
                />
                <input  type='submit' value="add" className='btn btn-outline-success'></input>
            </div>
        </form>
    );
};
AddTodo.propTypes= {
    addTodoFunc: PropTypes.func.isRequired

}

export default AddTodo;