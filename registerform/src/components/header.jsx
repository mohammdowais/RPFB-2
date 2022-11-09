import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from "./signup";
import Login from "./login"
import Home from "./home"

export default function Header() {
    return(
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Reform Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" href="/">Signup</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link"  tabIndex="-1" >Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
    )
}