import "./App.css";
import { useState } from "react";
import HeaderComponent from "./components/Header/Header";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderComponent onMenuToggle={() => setMenuOpen((o) => !o)} />

      <div className="layout">
        {menuOpen && <aside className="sidebar">Sidebar</aside>}
        <main className="main">
          <h1>This is a new header</h1>
          <p>
            This content is nonsence and will be deleted soon{" "}
            <span> in development</span>
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
