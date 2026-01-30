import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>Edit</li>
        <li>Delete</li>
        <li>Share</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
