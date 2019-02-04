import React, { Component } from 'react';
import "./stylesheets/Card.css";
class DownCard extends Component {
    // flipped() {
    //     return this.props.flipped ? "notflipped" : "flipped";
    // }

    render() {
        return (
          <div>
              <img src={"dos-carte.png"} />
              Carte face cachée</div>
        );
    }
}

export default DownCard;
