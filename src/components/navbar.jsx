import React from "react";
import './navbar.css';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg text-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Silvis' Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
            </button>
    
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
            </li>
             <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
    </div>
  </div>
</nav>
    )
}