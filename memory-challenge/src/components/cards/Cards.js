import React, { Component } from "react";
import "./Cards.css"


class Card extends Component {
    captureClick = () => {
        this.props.rememberClick(this.props.cardID)
    };

    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 my-3">
                <div className="Card" onClick = {this.captureClick}>
                    <img src= {`./images/${this.props.image}.jpg`} alt="Wubalubadubdub!"/>
                </div>
            </div>
        )
    }
}


export default Card;