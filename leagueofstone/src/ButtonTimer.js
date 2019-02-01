import React, { Component } from "react";
import {RELOAD_TIME} from "./consts";


class ButtonTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
    }
    time() {
        this.setState(state => ({
            time: state.time + 1
        }));

    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.reloadMatch(),
            RELOAD_TIME
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    render() {
        const timer = `${Math.floor(this.state.time/60)}:${this.state.time % 60}`
      return (

        <div >
            {/*onLoad={this.decompte}*/}
            <div id="Crono">{timer}</div>
        </div>
      );
    }
}

function decompte(){
    var cpt = 10 ;
    var x ;
    var compte_a_rebours = document.getElementById("Crono");
    if(cpt>=0)
    {
        if(cpt>1)
        {
            var sec = " secondes.";
        } else {
            var sec = " seconde.";
        }
        compte_a_rebours.innerHTML = cpt + sec;
        cpt-- ;
        x = setTimeout(1000) ;
    }
    else
    {
        clearTimeout(x) ;
    }
}

  
  export default ButtonTimer