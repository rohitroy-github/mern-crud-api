import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// importingComponents
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
