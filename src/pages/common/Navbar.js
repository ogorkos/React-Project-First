import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
 
class Navbar extends Component {
  state = {isBoxVisible:false};
  
  render() {
    const user = this.props.user;
    // console.log('user in Navbar - ', user);
    return (
      <nav className="navbar navbar-expand-md navbar-light shadow-sm">
        <div className="container">
          <Link className="nav-item nav-link" to="/">
            Real App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/about">
                  About
                </NavLink>
              </li>
              {user && user.biz && 
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/my-cards">
                    My Cards
                  </NavLink>
                </li>
              }              
            </ul>

            <ul className="navbar-nav ml-auto ">
              {!user && 
                <>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/signin">
                      Signin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/signup" >
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/biz-signup" >
                      Bisiness signup
                    </NavLink>
                  </li>
                </>
              }
              {user && 
                <>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/logout" >
                      Logout
                    </NavLink>
                  </li>
                </>
              }
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
 
export default Navbar;