import React from 'react';
import ReactDOM from 'react-dom/client';


export function FetchPage() {

  let empresas = new Array

  const ObtenerDatos = (datos) => {
    for (let ind = 0; ind < datos.length; ind++){
      console.log(datos[ind]["company"]["name"])
      empresas.push(datos[ind]["company"]["name"])
    }
  }
  
  fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => ObtenerDatos(data))

  console.log(empresas)

  return (
    <>
      <div className='container mt-4 mb-3'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active disabled" href="/fetch">Fetch</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/axios">Axios</a>
          </li>
        </ul>
      </div>
      <div className='container m'>
        console.log ={'>'} {empresas}
      </div>
    </>
  )
}