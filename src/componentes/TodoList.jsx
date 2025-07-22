import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { TodoItem } from './TodoItem';
import { v4 as uuid } from "uuid";

const KEY = "todoApp.todos"
export function TodoList() {

  const [todos, setTodos] = useState([])

  const taskRef = useRef();

  // Cargar desde LocalStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY))
    if (storedTodos){
      setTodos(storedTodos)
    }
  }, [])

  // Guardar a LocalStorage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos])

  const agregarTarea = () => {
    const task = taskRef.current.value
    const id = uuid();

    if (task === '') return;

    setTodos((prevTodos) => {
      const newTask = {
        id: id,
        task: task,
        completed: false
      }
      return [...prevTodos, newTask]
    })

    taskRef.current.value = null;
  }
  
  const cambiarEstadoTarea = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos);
  }

  const ContarTareasIncompletas = () => {
    return todos.filter((todo) => !todo.completed).length;
  }
  const ResumenTareas = () => {
    const cantidad = ContarTareasIncompletas()

    if (cantidad === 1){
      return (
      <div className='alert alert-info'>
        Sólo queda {cantidad} tarea pendiente!
      </div>
      )
    } 
    if (cantidad === 0){
      return (
      <div className='alert alert-success'>
        No quedan tareas pendientes!
      </div>
      )
    }

    return (
      <div className='alert alert-info'>
        Quedan {cantidad} tareas pendientes!
      </div>
      )
  }

  const eliminarTareasCompletadas = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  return (
    <>
    <div className='container m'>
    <div className='container mt-4 mb-3'>
      <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active disabled" aria-current="page" href="localhost:3000">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/fetch">Fetch</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/axios">Axios</a>
          </li>
        </ul>
      </div>
      <h1 className='alert alert-info'>Listado de Tareas</h1>

      <div className='input-group mt-3 mb-3'>
        <input ref={taskRef} type="text" placeholder='Agregar una Tarea' className='form-control'/>
        <button onClick={agregarTarea} className='btn btn-success'>
          <i className="bi bi-plus-lg"></i>
        </button>
        <button onClick={eliminarTareasCompletadas} className='btn btn-danger'>
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <ul className='list-group mb-3'>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} />
        ))}
      </ul>
      <ResumenTareas />
      </div>
    </>
  )
}