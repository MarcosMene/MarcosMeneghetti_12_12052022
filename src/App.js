import Header from "./components/header/Header";
import SideMenu from "./components/sidemenu/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./general.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <SideMenu />
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
