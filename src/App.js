import React, { Fragment } from 'react';
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo';
const App =() =>{
  return (
    <div>
    <Fragment>
      <Header></Header>
      <Todo></Todo>
    </Fragment>
    </div>
  )
}
export default App;
