import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="myNavbar mb-3">
                <div className="navbarText mt-3">Your Score:<span>{this.props.currentScore} </span>
                    | High Score:<span>{this.props.highScore}</span>
                </div>
            </div>
        )
    }
}

export default Navbar;