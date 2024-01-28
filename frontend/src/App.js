import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoView from './components/TodoListViews';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // READ ALL TODOS
  const loadTodos = () => {
    axios.get('http://127.0.0.1:11111/api/todo')
      .then(result => {
        setTodoList(result.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    loadTodos()
  }, []);

  // POST A TODO
  const addTodoHandler = () => {
    axios.post('http://127.0.0.1:11111/api/todo', { 'title': title, 'description': desc })
      .then(result => {
        console.log(result)
        loadTodos()
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  };

  return (
      <div className='App list-group-item justify-content-center align-items-center mx-auto' style={{"width": "400px", "backgroundColor": "white", "marginTop": "15px"}}>
      <h1 className='card text-white bg-primary mb-1' styleName="max-width: 20rem;">TASK MANAGER</h1>
      <h6 className='card text-white bg-primary mb-3'>FASTAPI - REACT - MONGODB</h6>
      <div className='card-body'>
        <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
        <span className='card-text'>
          <input className='mb-2 form-control titleIn' placeholder='Title' onChange={event => setTitle(event.target.value)} />
          <input className='mb-2 form-control desIn mb-2' placeholder='Description' onChange={event => setDesc(event.target.value)}/>
          <button className='btn btn-outline-primary mx-3 mb-3' style={{'borderRadius': '50px', 'fontWeight': 'bold'}} onClick={addTodoHandler}> Add Task</button>

        </span>

        <h5 className='card text-white bg-dark mb-3'> Your Tasks</h5>
        <div>
          <TodoView todoList = {todoList} loadTodos={loadTodos} />
        </div>

      </div>
      <h6 className='card text-dark bg-warning py-1 mb-0'> Copyright 2024, All rights reserved &copy;</h6>
      </div>

  );
}

export default App;
