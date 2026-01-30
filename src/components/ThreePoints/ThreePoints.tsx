import styles from './ThreePoints.module.css';
import Menu from '../../assets/Menu_icon.png';

type MenuButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function MenuButton({ className, ...props }: MenuButtonProps) {
  return (
    <button {...props} className={`${styles.menuButton} ${className ?? ''}`}>
      <img className={styles.imageOfMenu} src={Menu} alt="Menu" />
    </button>
  );
}

export default MenuButton;
