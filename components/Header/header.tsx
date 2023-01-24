import Link from "next/link";
import styles from '/styles/header.module.css';
const Header = () => {
  return (


    <div className={styles.container}>
      <h1 className={styles.titulo}>Sistema de Notificaciones</h1>
      <ul className={styles.menu}>
        <Link href="/">
          <li className={styles.list}>
            <a className={styles.ti}>Inicio</a>
          </li>
        </Link>
        <Link href="/categorias">
          <li className={styles.list}>
            <a className={styles.ti}>Categorias</a>
          </li>
        </Link>
        {/* <Link href="/">
          <li className={styles.list}>
            <a className={styles.ti}>Juegos</a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.list}>
            <a className={styles.ti}>Games</a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.list}>
            <a className={styles.ti}>Contactos</a>
          </li>
        </Link> */}
      </ul>
    </div>
  );
};

export default Header;