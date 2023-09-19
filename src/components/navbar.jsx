import React from "react";
import JSImg from "../assets/images/JSImg.png";
import gmail from "../assets/images/gmail.png";
import { GithubLogo } from "phosphor-react";
import "./navbar.css";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg text-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={JSImg} height="50em" />
          Silvis' Portfolio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#personalSection">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projectsSection">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contactSection">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-row">
          <a  className='border-icon margin10px' href="https://www.gmail.com" title="gmail icons">
            <img src={gmail} height="15px" />
          </a>
          <a className='border-icon' href="https://github.com/JSilvis73" title="github">
            <GithubLogo />
          </a>
        </div>
      </div>
    </nav>
  );
};
