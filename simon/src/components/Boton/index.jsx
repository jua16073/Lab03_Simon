import React from 'react';
import './boton.css'

const Boton = ({
  isTurnedOn = false,
  color = 'blue', 
  usu
}) => (
  <button
    className= {
      `
      light
      ${isTurnedOn ? 'on' : ''}
      `
    }
    style = {{
      background: color,
    }}
   onClick={usu(0)}/>
);

export default Boton;