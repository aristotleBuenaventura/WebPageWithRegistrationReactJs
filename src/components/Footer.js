import React from 'react'

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
                <a class="nav-link link-light"  href="/">Home</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link link-light" href="works.html">Works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-light" href="biography.html">Biography</a>
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
