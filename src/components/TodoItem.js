import React from 'react';
import PropTypes from 'prop-types'
import '../css/product.css'
const TodoItem = (props) => {
    const todo = props.todoProps;
    const markComplete = props.markCompleteFunc;
    const deleteTodo = props.deleteTodoFunc;
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through': 'none',
        borderLeft:'10px',
        backgroundColor: todo.completed ? 'rgb(255 0 0)': '#ffffff',
    }
    const btnCheckBox ={
        float : 'center',
        width: '50%',
        height:'50%'
    }
    const deleteButtonStyle ={
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px', 
        borderRadius:'50%',
        cursor: 'pointer',
        float: 'right'
    }
    const updateButtonStyle ={
        background: '#000000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px', 
        borderRadius:'50%',
        cursor: 'pointer',
        float: 'right'
    }
    return (
        <div className = "col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item">
            <div className="card" style={{ width: "18rem", height: '100%' }}>
                <div className='row'>
                    <img src="https://kenh14cdn.com/thumb_w/620/2016/1-1475304575558.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={todoItemStyle}>{todo.title}</h5>
                        <p className="card-text" >Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <div className='row' style={{ paddingTop: "10px", paddingLeft: "10px"}}>
                            <div className='col-sm-4'>
                                <input style={btnCheckBox} type="checkbox" onChange={markComplete.bind(this, todo.id)} checked = {todo.completed}></input>
                            </div>
                            <div className='col-sm-4'>
                                <button onClick={deleteTodo.bind(this, todo.id)} className='btn btn-danger'>delete</button>
                            </div>
                            <div className='col-sm-4'>
                                <button className='btn btn-info'>update</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired, 
    markCompleteFunc : PropTypes.func.isRequired,
    deleteTodoFunc : PropTypes.func.isRequired

}

export default TodoItem;