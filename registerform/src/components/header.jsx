import logo from "./images/bluebooklogo.png";
import "../App.css";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Profile from "./angelprofile";
import ChangePass from "./changepassword";
import UpdateProfile from "./updateprofile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <img
                src={logo}
                style={{ width: "50px", marginTop: "-10px" }}
                alt="bluebook"
              />
              Bluebook
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                style={{ marginLeft: "auto" }}
                className="navbar-nav  mb-2 mb-lg-0 ml-0"
              >
                <li className="nav-item ">
                  <Link to="/" className="nav-link " aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link" href="/">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" tabIndex="-1">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/angelprofile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/changepassword" element={<ChangePass />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
