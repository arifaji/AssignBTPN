import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <div className="container">
        <a className="navbar-brand" href="/">
          Angular & Bootstrap
        </a>
        <div className="navbar-expand mr-auto">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">
              Home
            </a>
            <a className="nav-item nav-link" href="/about">
              About
            </a>
            <a className="nav-item nav-link" href="/contact">
              Contact
            </a>
            <a className="nav-item nav-link" href="/mypdf">
              My PDF
            </a>
            <a className="nav-item nav-link" href="/myform">
              Dynamic From
            </a>
          </div>
        </div>
        <div className="navbar-expand ml-auto navbar-nav">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link"
              href="https://github.com/medasaki"
              target="_blank"
            >
              <i className="fa fa-github" />
            </a>
            <a
              className="nav-item nav-link"
              href="https://twitter.com/medasaki"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
