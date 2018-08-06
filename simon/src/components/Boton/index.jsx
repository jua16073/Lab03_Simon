import React from 'react';
import './boton.css'

const Boton = ({
  isTurnedOn = false,
  color = 'red', 
}) => (
  <div>
    className= {
      `
      light
      ${isTurnedOn ? 'on' : ''}
      `
    }
    style = {{
      background: color,
    }
    }
  </div>
);

export default Boton;