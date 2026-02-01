import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SidebarComponent from "./components/Sidebar/Sidebar";
import HeaderComponent from "./components/Header/Header";
import Badminton from "./pages/Badminton";

function App() {
  return (
    <div className="layout">
      <SidebarComponent />
      <main className="main">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Badminton" element={<Badminton />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
