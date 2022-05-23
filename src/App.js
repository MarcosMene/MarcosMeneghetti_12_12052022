import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import SideMenu from "./components/sidemenu/SideMenu";
import Header from "./components/header/Header";
import React from "react";

import User from "./pages/user/User";
import Page404 from "./pages/page404/Page404";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <SideMenu />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<User />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
