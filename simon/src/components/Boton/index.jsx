import React from 'react';
import './boton.css'

const Boton = ({
  isTurnedOn = false,
  color = 'blue', 
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
  />
);

export default Boton;