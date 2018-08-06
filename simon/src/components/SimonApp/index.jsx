import React, {Fragment} from 'react';

import Simon from '../Simon';

class SimonApp extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      currentLight: 0,
      colors: ['green', 'yellow', 'red', 'blue'],
      /*inicial: [],
      usuario:[],*/
    };
  }

  _generate(){
    console.log("hola");
  }

  render() {
    const {colors, currentLight} = this.state;
    return(
      <div>
        <Simon
          colors={colors}
          turnedOnLight={colors[currentLight]}
        />
      </div>
    )
  }
}

export default SimonApp;