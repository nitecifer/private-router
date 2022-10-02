import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Login } from "./Login.jsx";
import { Profile } from "./Profile.jsx";
import ProtectedRoute from "./ProtectedRoute.js";
const App = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login "> this is login page</Link>
          </li>
          <li>
            <Link to="/profile "> this is private routes made with </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
         <ProtectedRoute path="/profile" components={Profile} auth={true}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
