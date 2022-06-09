import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import SideMenu from "./components/sidemenu/SideMenu";
import Header from "./components/header/Header";
import React from "react";
import User from "./pages/user/User";
import Page404 from "./pages/page404/Page404";
import Home from "./pages/home/Home";

/**
 *@name App
 *@description function get together all components to render to the DOM
 * @returns {JSX.Element}
 */

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <SideMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:id" element={<User />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
