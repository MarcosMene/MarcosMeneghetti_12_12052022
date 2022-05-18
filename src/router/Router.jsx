import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Page404 from "../pages/page404/Page404";

const RouterPath = () => {
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="*" element={<Page404 />} />
  </Routes>;
};

export default RouterPath;
