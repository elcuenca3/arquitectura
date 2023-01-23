import React, { SyntheticEvent } from 'react'
import Header from "../components/Header/header";
import styles from "../header.module.css";



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
      
      <form className = 'form-register' onSubmit={submit}>
      <p>Ingrese su nombre</p>
        <label>
          <div>
          <input className ='controls'  type = "text" name = "autor " id = " autor" placeholder = "Ingrese su nombre" />          
          </div>
        </label>
        <p>Ingrese su Descripcion</p>
        <label>
          <div>
          <input className ="controls" type = "text" name = "descripcion " id = " descripcion" placeholder = "Ingrese su descripcion" />
          </div>
        </label>
        <p>Ingrese su fecha</p>
        <label>
          <div>
          <input className="controls" type = "date" name = "fecha " id = " fecha" placeholder = "Ingrese su fecha"/>
          </div>
        </label>
        <p>Ingrese su materia</p>
        <label>
          <div>
          <input className="controls" type = "text" name = "materia " id = " materia" placeholder = "Ingrese la materia"/>
          </div>
        </label>
        <p>Ingrese su titulo</p>
        <label>
          <div>
          <input className="controls" type = "text" name = "titulo " id = " titulo" placeholder = "Ingrese el titulo "/>
          </div>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}
