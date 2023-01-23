import React, { useState, useEffect } from 'react'
import Styles from '/styles/Home.module.css'

export default function Auxiliar() {

    const [item, setItem] = useState([])

    const peticion = async () => {
        const res = await fetch(`http://localhost:8000/notificacion`)
        const games = await res.json()
        setItem(games)
    }

    useEffect(() => {
        peticion();

    }, [])




    return (
        <div className={Styles.cards}>
            {
                item.map(item => (
                    <div key={item.id} >
                        <div className={Styles.card}>
                        <h4 className={Styles.title_content}>{item.titulo}</h4>
                        <a className={Styles.descri}>{item.fecha}</a>
                        <a className={Styles.descri}>{item.materia}</a>
                        <p className={Styles.barra}>――――――――――――――――</p>
                        <a className={Styles.descri}>{item.descripcion}</a>
                        <b className={Styles.autor0}>Autor:</b>
                        <b className={Styles.autor}>{item.autor}</b>
                        </div>
                    </div>
                ))}
        </div>
    )
}
