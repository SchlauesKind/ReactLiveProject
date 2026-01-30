import styles from "./Sidebar.module.css";

function SidebarComponent({ isOpen }: { isOpen: boolean }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.expanded : ""}`}>
      <h2>Sidebar Menu</h2>
      <ul>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarComponent;
