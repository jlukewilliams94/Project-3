import React from 'react';
import Logo from '../Age/logo.png'

function Main() {
return(
    <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">
          <img src={Logo}/>
      </a>
      <ul class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li class="active"><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
)
}

export default Main;