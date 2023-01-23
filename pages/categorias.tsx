import React, { SyntheticEvent } from 'react'
import Header from "../components/Header/header";


export default function Categorias() {

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    const fronData = {
      name: e.target.name.value,
      comment: e.target.comment.value,

    }
    fetch('/api/hello', {
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
      <p>Ingrese su nombre</p>
      <form action='' onSubmit={submit}>
        <label>
          <div>
            <input type="text" name='name' />
          </div>
        </label>
        <label>
          <div>
            tu comentario
          </div>
          <textarea name='comment'></textarea>
          <input type="submit"/>
        </label>
      </form>
    </div>
  )
}
