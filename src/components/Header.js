import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link to={'/'} class="navbar-brand">Aristotle</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={'/'} class="nav-link link-light">Home</Link>
              </li>
              <li class="nav-item">
                <Link to={'/works'} class="nav-link link-light">Works</Link>
              </li>
              <li class="nav-item">
                <Link to={'/biography'} class="nav-link link-light">Biography</Link>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={'/registration'} class="nav-link link-light">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        
    </nav>
    </div>
  )
}

export default Header
