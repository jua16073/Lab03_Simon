import React, {Fragment} from 'react';

import Simon from '../Simon';

class SimonApp extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      currentLight: null,
      colors: ['green', 'yellow', 'red', 'blue'],
      inicial: [],
      usuario:[],
      current: null, 
      turno: false,
    };
  }

  _generate(){
    const min = 0;
    const max = 4;
    const {inicial} = this.state;

    const rand = Math.floor(min + (Math.random() * (max - min)));
    /*this.setState({
      currentLight: rand,
    })*/
    this.setState({
      inicial: [
        ...inicial,
        rand,
      ]
    })
    console.log(this.state.inicial);
  }

  _cambio(){
    console.log('nain');
    const {
      current
    } = this.state;
    this.setState({
      currentLight: this.state.inicial[current],
    })
    this.setState({
      current: current+1,
    })
    console.log(this.state.inicial[current]);
    if(this.current>=this.state.inicial.length){
      this.setState({
        current: 0,
      })
      const{timer} = this.state;
      clearInterval(timer);
    }
  }

  _loop(){
    const timer = setInterval(this._cambio.bind(this), 1000);
      this.setState({
        timer
      })
  }

  _inicio(){
    this._generate();
    console.log(this.state.turno)
    if (this.state.turno === false){
      this._loop();
    }
  }


  render() {
    const {colors, currentLight} = this.state;
    return(
      <Fragment>
        <Simon
          colors={colors}
          turnedOnLight={colors[currentLight]}
        />
        <button onClick = {this._inicio.bind(this)}>Start</button>
      </Fragment>
    )
  }
}

export default SimonApp;