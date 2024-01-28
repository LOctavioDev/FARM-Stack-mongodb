import './App.css';
import React, {useState, useEffect} from 'react';
import { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTile] = useState('')
  const [desc, setDesc] = useState('')

  //READ ALL TODOS


  return (
      <div className='App list-group-item justify-content-center align-items-center mx-auto' style={{"width": "400px", "backgroundColor": "white", "marginTop": "15px"}}>
      <h1 className='card text-white bg-primary mb-1' styleName="max-width: 20rem;">TASK MANAGER</h1>
      <h6 className='card text-white bg-primary mb-3'>FASTAPI - REACT - MONGODB</h6>
      <div className='card-body'>
        <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
        <span className='card-text'>
          <input className='mb-2 form-control titleIn' placeholder='Title'/>
          <input className='mb-2 form-control desIn mb-2' placeholder='Description'/>
          <button className='btn btn-outline-primary mx-3 mb-3' style={{'borderRadius': '50px', 'font-weight': 'bold'}}> Add Task</button>

        </span>

        <h5 className='card text-white bg-dark mb-3'> Yout Tasks</h5>
        <div>
          {/* {TODO EXTERNAL COMPONENTS} */}
        </div>

      </div>
      <h6 className='card text-dark bg-warning py-1 mb-0'> Copyright 2024, All rights reserved &copy;</h6>
      </div>

  );
}

export default App;
