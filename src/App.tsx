import "./App.css";
import HeaderComponent from "./components/Header/Header";
import SidebarComponent from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="layout">
        <SidebarComponent />
        <main className="main">
          <HeaderComponent />
          Main content goes here. Lol
        </main>
      </div>
    </>
  );
}

export default App;
