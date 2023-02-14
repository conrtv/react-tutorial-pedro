import './App.css';
import { useState } from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const editTask = (id) => {};

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              {/* <h1>{task.taskName}</h1> */}
              <EditText defaultValue={task.taskName}></EditText>
              <button onClick={() => deleteTask(task.id)}>X</button>
              <button onClick={() => editTask(task.id)}>EDIT</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
