import React, {Fragment} from 'react';

import Simon from '../Simon';

class SimonApp extends React.Component {
  constructor (props){
    super(props);

    this.usuarioS = this.usuarioS.bind(this);

    this.state = {
      currentLight: null,
      colors: ['green', 'yellow', 'red', 'blue'],
      inicial: [],
      usuario:[],
      current: 0, 
      turno: false,
    };
  }

  _generate(){
    const min = 0;
    const max = 4;
    const {inicial} = this.state;

    const rand = Math.floor(min + (Math.random() * (max - min)));
    this.setState({
      inicial: [
        ...inicial,
        rand,
      ]
    })
  }

  _cambio(){
    const {
      current
    } = this.state;
    this.setState({
      currentLight: this.state.inicial[current],
    })
    this.setState({
      current: current+1,
    })
    if(current>=this.state.inicial.length){
      this.setState({
        current: 0,
        turno: true,
      })
      const{timer} = this.state;
      clearInterval(timer);
      this._inicio();
    }
  }

  _inicio(){
    this._generate();
    console.log(this.state.turno)
    if (this.state.turno === false){
      const timer = setInterval(this._cambio.bind(this), 1000);
      this.setState({
        timer
      })
    }
    if (this.state.turno === true){
      console.log("le toca al jugador");
    }
  }

  usuarioS(num){
    console.log("pls")
    const{
      usuario
    } = this.state;
    this.setState({
      ...usuario,
      num
    })
    this.setState({
      currentLight:num,
    })
  }


  render() {
    const {colors, currentLight} = this.state;
    return(
      <Fragment>
        <Simon
          colors={colors}
          turnedOnLight={colors[currentLight]}
          usu = {this.usuarioS.bind(this)}
        />
        <button onClick = {this._inicio.bind(this)}>Start</button>
      </Fragment>
    )
  }
}

export default SimonApp;