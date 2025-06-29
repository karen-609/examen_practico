import styles from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>CodeFlux</h1>
      <div className={styles.links}>
        <Button to="/">Inicio</Button>
        <Button to="/guide">Guía paso a paso</Button>
        <Button to="/about">Acerca de CodeFlux</Button>
        <Button to="https://react.dev/">Documentación Oficial de React</Button>
      </div>
    </nav>
  );
};

export default Navbar;
