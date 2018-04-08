import React, {Component} from "react";
import "./pic/meo.png";

class Header extends Component {
    state = {
        text: ''
    };

    render() {
        const {text} = this.state;

        return(
            <div className="header">
                <logo img="meo.png"/>

                <h1>Wellcome to the Cat's world</h1>

                <from className="create" onSubmit={this.handleOnSubmit.bind(this)}>
                    <input id="inputAdd"
                            onChange={this.handleChangeText.bind(this)}
                            value={text} type="text"
                            placeholder="Search for cat..."/>
                    <button disable={!text} type="submit" id="buttonAdd">Go</button>
                </from>
            </div>
        );
    }

    handleChangeText(text) {
        const {value} = text.target;

        this.setState({
            text: value
        });
    }

    handleOnSubmit(text) {
        text.preventDefault();

        const {text} = this.state;

        if(!text){
            return;
        }

        this.props.onCreate(text);
        this.setState({
            text: ''
        });
    }
}

export default Header;