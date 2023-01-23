import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  return (


    <div className={styles.container}>
      <h1 className={styles.titulo}>Sistema de Notificaciones</h1>
      <ul className={styles.menu}>
        <Link href="/">
          <li className={styles.list}>
            <a>Inicio</a>
          </li>
        </Link>
        <Link href="/categorias">
          <li className={styles.list}>
            <a>Categorias</a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.list}>
            <a>Juegos</a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.list}>
            <a>Games</a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.list}>
            <a>Contactos</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;