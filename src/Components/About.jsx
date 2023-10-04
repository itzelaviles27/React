import React from 'react';
import miImagen from './foto.jpeg';
import './About.css'


const About = () => {
  return (
    <div className='titulo'>
      <h1>Acerca de Mi</h1>
      <div>
        <h2>Información Personal</h2>
        <p>Nombre: Evelyn Itzel Hernández Avilés</p>
        <p>Correo/Contacto: itzelaviles2709@gmail.com</p>
        <p>Descripción: Soy una ingeniera industrial apasionada por la tecnología y amante de los animales. <br />
                Mi pasión por la tecnología me impulsa a seguir aprendiendo y colaborando con otros profesionales apasionados. <br />
                Disfruto conocer nuevos lugares y aprender sobre las personas.  </p>
      </div>
      <div>
        <h2>Foto</h2>
        <img className='miFoto' src={miImagen} alt="Mi foto"/>
      </div>
    </div>
  );
}

export default About;
