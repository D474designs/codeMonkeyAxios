import React from 'react';
import './Home.css'

const Home = () => {
  return (
<div class="page">
  <div class="body">
    <div id="featured">

                                     <center><h3>Me gusta programar</h3></center>
                        <center> <h2>Hemos creado un sitio web ya q nuestro hobby es la programacion.
                           Y nuestro principal objetivoes estimular y desarrollar el uso de la logica, enfocandonos
                           especificamente en niños y adolecentes.</h2></center>

                          <center> <h2>este es el primer dirigido a niños de habla hispana, para integrarlos al mu ndo de la programacion.
                           Aprende de la logica jugando, construyendo y desarmando tus juegos favoritos.</h2></center>
    </div>
    <ul class="blog">
      <li>
        <div>
          <img alt=" did not load" src={require('./pancho.gif')} />
          <h2>PANCHO</h2>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img alt=" did not load" src={require('./mono.gif')} /></a>
        <h2>PETE</h2>
          <a href="blog.html">Click to read more</a>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img alt=" did not load" src={require('./pete.gif')} /></a>
        <h2>DATA</h2>
          <a href="blog.html">Click to read more</a>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img alt=" did not load" src={require('./chimp.gif')} /></a>
        <h2>CHEPE</h2>

        </div>
      </li>
    </ul>
  </div>
  <div class="footer">

  <center><p>&#169; Copyright &#169; 2018. HOLA-CODE... Greenfield project.</p></center>
    <div class="connect">
      <a href="http://facebook.com/freewebsitetemplates" id="facebook">facebook</a>
      <a href="http://twitter.com/fwtemplates" id="twitter">twitter</a>
      <a href="http://www.youtube.com/fwtemplates" id="vimeo">vimeo</a>
    </div>
  </div>
</div>
  );
}


export default Home;
