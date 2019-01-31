import React, { Component } from "react";


class ButtonTimer extends Component {
    
    render() {
      return (
        <div onLoad={this.decompte}>
            <div id="Crono"></div>
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