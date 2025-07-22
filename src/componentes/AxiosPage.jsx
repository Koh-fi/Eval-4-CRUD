import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

export function AxiosPage() {

  axios.get("https://api.chucknorris.io/jokes/random").then(response => console.log(response.data)).catch(error => console.error('Error:', error)); 

  return (
    <>
      <div className='container mt-4 mb-3'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/fetch">Fetch</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active disabled" href="/axios">Axios</a>
          </li>
        </ul>
      </div>
      <div className='container m'>

      </div>
    </>
  )
}