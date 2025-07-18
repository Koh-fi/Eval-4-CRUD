import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './componentes/TodoList';

export function App() {

  return (
    <>
      <div className='container m'>
        <TodoList />
      </div>
    </>
  )
}