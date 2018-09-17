import React from 'react';
import './SummitTutorial.css'
import Footer from '../Footer/Footer.js'

const Contact = () => {
  return (

<div id="contact-form">
	<div>
		<h1>Un place en concrete!</h1>
		<h4>Tienes una sugerencia/tutorial para Codemonkeys?</h4>
	</div>
		<p id="failure">Oopsie...no se mando el mensaje.</p>
		<p id="success">Tu mensaje fue mandado, Gracias!</p>

		   <form method="post" action="/">
			<div>
		      <label for="name">
		      	<span class="required">Nombre: *</span>
		      	<input type="text" id="name" name="name" placeholder="Nombre" required="required" tabindex="1" autofocus="autofocus" />
		      </label>
			</div>
			<div>
		      <label for="email">
		      	<span class="required">Email: *</span>
		      	<input type="email" id="email" name="email" placeholder="Email" tabindex="2" />
		      </label>
			</div>
			<div>
		      <label for="subject">
		      <span>Tema: </span>
			      <select id="subject" name="subject" tabindex="4">
			         <option value="hello">Sobre CodeMonkeys</option>
			         <option value="quote">Me gustaria?!</option>
			         <option value="general">-Me gustaria ayudar! - </option>
			      </select>
		      </label>
			</div>
			<div>
		      <label for="message">
		      	<span class="required">Mensaje: *</span>
		      	<textarea id="message" name="message" placeholder="Escribe tu mensaje aqui." tabindex="5" required="required"></textarea>
		      </label>
			</div>
			<div>
		      <button name="submit" type="submit" id="submit" >Mandar</button>
			</div>
		   </form>
       <Footer />
	</div>

  );
}


export default Contact;
