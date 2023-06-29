import React from 'react';

const FindTodo = () => {
    const FindTodoFormStyle ={
        display: 'flex'
    }
    const findSingleTodo = event =>{
        event.preventDefault()

    }
    const findTodoInputStyle = {
        flex: '10',
        padding: '5px'
      }
    return (
        <div>
        <form style={FindTodoFormStyle} onSubmit={findSingleTodo} >
            <div class="input-group mb-3">
                <input 
                    className='form-control'
                    type='text'    
                    name="title" 
                    placeholder='tittle' 
                    style={findTodoInputStyle}
                />
                <input  type='submit' value="find" className='btn btn-outline-success'></input>
            </div>
        </form>

        </div>
    );
};

export default FindTodo;