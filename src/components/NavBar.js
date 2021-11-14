import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="home" class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <div class="container">
        <img src="./images/logo_brasch_dark_bg.png" alt="BMLogo" class="navbar-brand logo" style={{ size: "40px" }}/>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Clients</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Projects</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
