import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import { TodoList } from './componentes/TodoList';
import { FetchPage } from './componentes/FetchPage';
import { AxiosPage } from './componentes/AxiosPage';

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/fetch' element={<FetchPage />} />
          <Route path='/axios' element={<AxiosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}