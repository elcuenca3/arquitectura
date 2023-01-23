import React, { SyntheticEvent } from 'react'
import Header from "../components/Header/header";


export default function Categorias() {

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    const fronData = {
      autor: e.target.autor.value,
      descripcion: e.target.descripcion.value,
      fecha: e.target.fecha.value,
      materia: e.target.materia.value,
      titulo: e.target.titulo.value,


      // "autor": autor,
      // "descripcion": descripcion,
      // "fecha": fecha,
      // "materia": materia,
      // "titulo": titulo

    }
    fetch('http://localhost:8000/notificacion', {
      method: 'POST',
      body: JSON.stringify(fronData),
    })  
    console.log({fronData});
    
  }
  return (

    <div>
      <Header />
      {/*
      <Auxiliar />
  */}
      
      <form action='' onSubmit={submit}>
      <p>Ingrese su nombre</p>
        <label>
          <div>
            <input type="text" name='autor' />
          </div>
        </label>
        <p>Ingrese su Descripcion</p>
        <label>
          <div>
            <input type="text" name='descripcion' />
          </div>
        </label>
        <p>Ingrese su fecha</p>
        <label>
          <div>
            <input type="text" name='fecha' />
          </div>
        </label>
        <p>Ingrese su materia</p>
        <label>
          <div>
            <input type="text" name='materia' />
          </div>
        </label>
        <p>Ingrese su titulo</p>
        <label>
          <div>
            <input type="text" name='titulo' />
          </div>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}
