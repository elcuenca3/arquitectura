import Header from "../components/Header/header";
import Styles from '/styles/Home.module.css'
import Link from "next/link";
import React, { SyntheticEvent } from 'react'



export default function Categorias() {

  const submit = (e) => {
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
    fetch('http://localhost:8000/', {
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
      <div className={Styles.conten}>
        <h2  className={Styles.cabeza}>Ingreso de datos</h2>
      <form action='' onSubmit={submit}>
      <p className={Styles.titulo}>Ingrese su nombre</p>
        <label>
          <div>
          <input className={Styles.input}  type = "text" name = 'autor' placeholder = "Ingrese su nombre" />          
          </div>
        </label>
        <p className={Styles.titulo}>Ingrese su Descripcion</p>
        <label>
          <div>
          <input className={Styles.input} type = "text" name = 'descripcion'  placeholder = "Ingrese su descripcion" />
          </div>
        </label>
        <p className={Styles.titulo}>Ingrese su fecha</p>
        <label>
          <div>
          <input className={Styles.input} type = "date" name = 'fecha'placeholder = "Ingrese su fecha"/>
          </div>
        </label>
        <p className={Styles.titulo}>Ingrese su materia</p>
        <label>
          <div>
          <input className={Styles.input} type = "text" name = 'materia'  placeholder = "Ingrese la materia"/>
          </div>
        </label>
        <p className={Styles.titulo}>Ingrese su titulo</p>
        <label>
          <div>
          <input className={Styles.input} type = "text" name = 'titulo'  placeholder = "Ingrese el titulo "/>
          </div>
        </label>
        <div className={Styles.juntar}>
        <input className={Styles.button} type="submit"/>
        <Link href="/">
        <button className={Styles.buttonR}> Regresar</button>
        </Link>
        </div>
      </form>
      </div>
    </div>
  )
}
