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
        </main>
      </div>
    </>
  );
}

export default App;
