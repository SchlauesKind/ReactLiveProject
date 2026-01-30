import styles from './Header.module.css';
import logo from '../../assets/gettingStartedLogo.jpg';
import MenuButton from '../ThreePoints/ThreePoints';

type HeaderProps = {
  onMenuToggle: () => void;
};

function HeaderComponent({ onMenuToggle }: HeaderProps) {
  return (
    <header className={styles.flexContainer}>
      <MenuButton className={styles.item} onClick={onMenuToggle} />

      <img
        className={`${styles.item} ${styles.logo}`}
        src={logo}
        alt="an image"
      />

      <h2 className={styles.item}>Header</h2>
    </header>
  );
}

export default HeaderComponent;
