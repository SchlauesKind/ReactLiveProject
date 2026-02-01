import { NavLink } from "react-router-dom";
import cheese_icon from "../../assets/cheese_icon.png";
import apple_icon from "../../assets/apple_icon.png";
import flex_styles from "../../styles/FlexContainer.module.css";
import styles from "./Sidebar.module.css";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/badminton"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            DBV - Badminton
          </NavLink>
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
