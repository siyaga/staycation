import React, { Component } from "react";

import InputNumber from "elements/Form/inputNumber"

export default class Example extends Component {
    state = {
        value : ""
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    render(){
        return(
            <div className="container">
            <div 
            className="row align-items-center justify-content-center"
            style={{ height: "100vh" }}
            >
                <div className="col-mute">
                    <InputNumber
                    max={30}
                    onchange={this.handleChange}
                    name="value"
                    value={this.state.value}
                    />
                </div>

            </div>
            </div>
        )
    }
}