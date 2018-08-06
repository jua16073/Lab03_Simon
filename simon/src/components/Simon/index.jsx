import React from 'react';
import Boton from '../Boton';
import './simon.css';

const Simon =({
  colors = ['red', 'yellow', 'green', 'blue'],
  turnedOnLight = null,
}) => (
  <div className = 'btnD'>{
    colors.map(
      color => (
        <Boton
          key = {color}
          color = {color}
          isTurnedOn= {color === turnedOnLight}
        />
      )
    )
  }
  </div>
)

export default Simon;