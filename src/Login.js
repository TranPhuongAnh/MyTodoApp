import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {login} from "./API";
import {setToken} from "./StorageService";

class Login extends Component {
    state = {
        facebook: '',
        password: ''
    };

    render() {
        const {auth} = this.props;

        if(auth) {
            return <Redirect to="/"/>;
        }

        const {facebook, password} = this.state;

        return(
            <div className="login">
                <h1>LOGIN WITH FACEBOOK</h1>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <h3>Create on your Facebook</h3>
                    <input onChange={this.handleChangeInput.bind(this, 'facebook')} value={facebook} name="facebook" type="text"/>
                    <h3>Enter your password</h3>
                    <input onChange={this.handleChangeInput.bind(this, 'password')} value={password} name="password" type="password"/>

                    <button>LOGIN</button>
                </form>
            </div>
        );
    }

    handleChangeInput(field, e) {
        const {value} = e.target;

        this.setState({
            [field]: value
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();

        const {facebook, password} = this.state;

        login({facebook, password}).then(res => {
            const {success, data} = res;
            const {accessToken} = data;

            if (success) {
                this.props.onAuth(true);

                setToken(accessToken);
            }
        });
    }
}

export default Login;