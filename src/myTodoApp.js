import React, {Component} from "react";
import "./css/style.css";
import "./css/App.css";
import Header from "./Header";
import listTodo from "./listTodo";
import {createTodo, deleteTodo, pickTodos, toggleTodo} from "./API";
import {Redirect} from "react-router-dom";

class myTodoApp extends Component {
    state = {
        todos: []
    };

    pickList() {
        pickTodos().then(oject => {
            const {data, success} = oject;

            if (success) {
                this.setStage({
                    todos: data
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        const {auth} = this.props;

        if(!auth){
            return;
        }

        this.pickList();
    }

    render() {
        const {todos} = this.state;
        const {auth} = this.props;

        if(!auth) {
            return <Redirect to="/login"/>
        }

        return (
            <div className="TodoApp">
                <Header onCreate={this.handleOnCreateTodo.bind(this)}/>
                <listTodo todos={todos}
                            onToggle={this.handleToggleTodo.bind(this)}
                            onDeleteTodo={this.handleDeleteTodo.bind(this)}/>
            </div>
        );
    }

    handleToggleTodo(id) {
        toggleTodo(id).then(() => {
            this.pickList();
        });
    }

    handleDeleteTodo(id) {
        deleteTodo(id).then(() => {
            this.pickList();
        });
    }

    handleOnCreateTodo(text) {
        createTodo(text).then(() => {
            this.pickList();
        });
    }
}

export default myTodoApp;