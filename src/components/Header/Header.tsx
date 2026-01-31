import styles from "./Header.module.css";
import flex_styles from "../../styles/FlexContainer.module.css";

function HeaderComponent() {
  return (
    <header className={`${styles.header} ${flex_styles.flexContainer}`}>
      Content will be added soon. This component is Header
    </header>
  );
}

export default HeaderComponent;
