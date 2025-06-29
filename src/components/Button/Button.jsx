import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ children, to }) => {
  return (
    <Link to={to} className={styles.primaryButton}>
      {children}
    </Link>
  );
};

export default Button;
