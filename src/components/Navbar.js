// import PropTypes from 'prop-types'
import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "yellow" }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ fontStyle: "italic" }}
            >
              News-Monk
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                {/* <li className="nav-item">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{color: 'black', backgroundColor: 'yellow', border: 'none'}}
                  >
                    <option selected>Country</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">Others</option>
                  </select>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/">Entertainment</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Sports</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Bussiness</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Technology</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Health</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="/">General </a></li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Science </a></li>

                <form
                  style={{ position: "absolute", right: "10px" }}
                  className="d-flex"
                  role="search"
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search category"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
