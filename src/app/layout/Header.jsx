import React from 'react'
const Header = (props) => (
    <nav class="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-primary" href=".">
        <img src="https://img.icons8.com/metro/104/000000/google-code.png" />
      </a>
      
      <a class="navbar-item is-primary" href=".">
      <u class="navbar-item">
      Rasmi Blog
      </u>
     </a>
      
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary is-outlined" href="https://rasmivan.com">
              <strong>My Profile</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
export default Header