import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
    render() {
        return (
            <div class="landing">
                <div class="container-fluid text-center text-md-left">
                    <h1>Memory Challenge!</h1>
                    <p>Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        )
    }
}

export default Landing;