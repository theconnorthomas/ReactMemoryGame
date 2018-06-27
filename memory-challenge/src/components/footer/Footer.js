import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div class="page-footer font-small blue pt-4 mt-4">
                <div class="container-fluid text-center text-md">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <span class="grey-text text-lighten-4">© Connor Thomas 2018</span>
                        </div>

                        <div class="col-md-6 mb-md-0 mb-3">
                            <a class="grey-text text-lighten-4 right" href="https://theconnorthomas.github.io/Bootstrap-Portfolio/">MyPortfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;