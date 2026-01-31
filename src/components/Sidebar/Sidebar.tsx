import apple_icon from "../../assets/apple_icon.png";
import cheese_icon from "../../assets/cheese_icon.png";
import styles from "./Sidebar.module.css";
import flex_styles from "../../styles/FlexContainer.module.css";

function SidebarComponent() {
  return (
    <aside className={styles.sidebar}>
      <div className={`${flex_styles.flexContainer} ${styles.logoContainer}`}>
        <h1>AppleCheese</h1>
        <img src={apple_icon} alt="Apple Icon" />
        <p
          style={{
            fontSize: "1.5rem",
            marginTop: "2rem",
            color: "orange",
            fontWeight: "bold",
          }}
        >
          {" "}
          &{" "}
        </p>
        <img src={cheese_icon} alt="Cheese Icon" />
      </div>
      <ul>
        <li>
          <a href="#">1 Link will be added soon</a>
        </li>
        <li>
          <a href="#">2 Link will be added soon</a>
        </li>
        <li>
          <a href="#">3 Link will be added soon</a>
        </li>
        <li>
          <a href="#">4 Link will be added soon</a>
        </li>
        <li>
          <a href="#">5 Link will be added soon</a>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarComponent;
