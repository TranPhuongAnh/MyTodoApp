import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {deleteToken} from "./StorageService";

class Logout extends Component {
    render(){
        deleteToken();

        const {auth} = this.props;
        if (auth) {
            return <Redirect to="./"/>;
        }
    }
}

export default Logout;