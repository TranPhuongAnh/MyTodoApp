import React, { Component } from "react";
import "./css/App.css";
import "./css/style.css";
import {Router, Switch} from "react-router-dom";
import myTodoApp from "./myTodoApp";
import Login from "./Login";
import NavBar from "./NavBar";
import {getTodo} from "./StorageService";
import Logout from "./Logout";

class App extends Component {
    state = {
        auth: false
    };

    conponentDidMount() {
        const auth = getAuth();

        this.setState({
            auth
        });
    }

    render() {
        const {auth} = this.state;

        return (
            <div id="App">
                <NavBar onAuth={this.changeTodo.bind(this)} auth={auth}/>
                <Switch>
                    <Router exact path="/" component={() => <myTodoApp auth={auth}/>}/>
                    <Router path="/login" component={() => <Login onTodo={this.changeTodo.bind(this)} auth={auth}/>}/>
                    <Router path="/logout" component={() => <Logout onTodo={this.changeTodo.bind(this)} auth={auth}/>}/>
                </Switch>
            </div>
        );
    }

    changeTodo(auth) {
        this.setStage({
            auth: auth
        });
    }
}

export default App;