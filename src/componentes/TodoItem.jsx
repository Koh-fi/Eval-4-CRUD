import React from 'react';
import ReactDOM from 'react-dom/client';

export function TodoItem({todo, cambiarEstado}) {

  const {id, task, completed} = todo;

  const fnCambiarEstado = () => {
    cambiarEstado(id);
  }

  return (
    <>
      <div className='container m'>
        <li className='list-group-item'>
          <input type="checkbox" onChange={fnCambiarEstado} checked={completed} className='form-check-input me-4' />
          {task}
        </li>
      </div>
    </>
  )
}