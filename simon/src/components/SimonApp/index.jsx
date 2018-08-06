import React, {Fragment} from 'react';

import Simon from '../Simon';

class SimonApp extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      currentLight: 0,
      colors: ['green', 'yellow', 'red', 'blue'],
      inicial: [0],
      usuario:[0],
    };
  }

  _generate(){
    const min = 0;
    const max = 4;
    const {inicial} = this.state;

    const rand = Math.floor(min + (Math.random() * (max - min)));
    this.setState({
      currentLight: rand,
    })
    this.setState({
      inicial: [
        ...inicial,
        rand,
      ]
    })
    console.log(this.state.inicial);
  }

  _recorrer(){
    
  }


  render() {
    const {colors, currentLight} = this.state;
    return(
      <Fragment>
        <Simon
          colors={colors}
          turnedOnLight={colors[currentLight]}
        />
        <button onClick = {this._generate.bind(this)}>Start</button>
      </Fragment>
    )
  }
}

export default SimonApp;