import React, {Component} from "react";
import Todo from "./Todo";

class listTodo extends Component {
    render(){
        const {todos} = this.props;

        return(
            <div className="main">
                <ul id="list">
                    {
                        todos.map((data, index) => {
                            return(
                                <Todo onToggle={this.handleToggle.bind(this)}
                                        onDelete={this.handleDelete.bind(this)} key={index} data={data}/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    handleToggle(id) {
        this.props.onToggle(id);
    }

    handleDelete(id) {
        this.props.onDeleteTodo(id);
    }
}

export default listTodo;