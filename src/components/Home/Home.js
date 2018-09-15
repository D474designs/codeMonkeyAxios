import React from 'react';
import './Home.css'

const Home = () => {
  return (
// <div className='intro'>
//     <h2>ACERCA DE CODE MONKEY</h2>
//      <h3>Me gusta programar</h3>
//      <h3>Hemos creado un sitio web ya q nuestro hobby es la programacion.
//        Y nuestro principal objetivoes estimular y desarrollar el uso de la logica, enfocandonos
//        especificamente en niños y adolecentes.</h3>
//        <h3>este es el primer dirigido a niños de habla hispana, para integrarlos al mu ndo de la programacion.
//         Aprende de la logica jugando, construyendo y desarmando tus juegos favoritos.</h3>
//
// </div>
<div class="page">
  <div class="body">
    <div id="featured">
      <h3>This is a FREE website template</h3>
      <p>This website template has been designed by Free Website Templates for you, for free. You can
      replace all this text with your own text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
      enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
    </div>
    <ul class="blog">
      <li>
        <div>
          <a href="blog.html"><img src="images/pastries.jpg" alt=""/></a>
          <p>This website template has been designed by Free Website Templates for you, for free.
          You can replace all this text with your own text.</p>
          <a href="blog.html">Click to read more</a>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img src="images/fruits.jpg" alt=""/></a>
          <p>This website template has been designed by Free Website Templates for you, for free.
          You can replace all this text with your own text.</p>
          <a href="blog.html">Click to read more</a>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img src="images/cosmetics.jpg" alt=""/></a>
          <p>This website template has been designed by Free Website Templates for you, for free.
          You can replace all this text with your own text.</p>
          <a href="blog.html">Click to read more</a>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img src="images/cosmetics.jpg" alt=""/></a>
          <p>This website template has been designed by Free Website Templates for you, for free.
          You can replace all this text with your own text.</p>
          <a href="blog.html">Click to read more</a>
        </div>
      </li>
    </ul>
  </div>
  <div class="footer">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="services.html">Gallery</a></li>
    </ul>
    <p>&#169; Copyright &#169; 2011. Company name all rights reserved</p>
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
