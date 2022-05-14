import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenu from "./components/sidemenu/SideMenu";
import Header from "./components/header/Header";
import "./app.scss";

import Home from "./pages/home/Home";
import Page404 from "./pages/page404/Page404";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <SideMenu />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
