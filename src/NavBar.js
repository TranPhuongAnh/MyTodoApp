import React, {Component} from "react";
import {Link} from "react-router-dom";
import {setToken} from "./StorageService";

class NavBar extends Component {
    render(){
        const {auth} = this.props;

        const login = !auth ? <li><Link to="/login">Login</Link></li>: null;
        const logout = auth ? <li><Link onClick={this.handleLogout.bind(this)}>Logout</Link></li> : null;

        return (
            <ul className="NavBar">
                <li><Link to="/">Home</Link></li>
                {login}
                {logout}
            </ul>
        );
    }

    handleLogout() {
        this.props.onAuth(false);
        setToken('');
    }
}

export default NavBar;