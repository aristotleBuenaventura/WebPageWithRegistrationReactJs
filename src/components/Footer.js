import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div class="container-fluid bg-dark">
      <div class="container">
        <div class="row">
          <div class="col col-6 text-light my-5 text-center">
            <p class="h2">Aristotle</p>
            <footer class="blockquote-footer mt-1">“Knowing yourself is the beginning of all wisdom.”</footer>
          </div>
          <div class="col col-6 text-light my-5 text-center">
            <ul class="nav flex-column">
              <li class="nav-item">
              <Link to={'/'} class="nav-link link-light">Home</Link>
              </li>
              <li class="nav-item ">
              <Link to={'/works'} class="nav-link link-light">Works</Link>
              </li>
              <li class="nav-item">
              <Link to={'/biography'} class="nav-link link-light">Biography</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
