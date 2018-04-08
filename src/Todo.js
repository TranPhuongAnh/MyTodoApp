import React, {Component} from "react";

class Todo extends Component {
    render() {
        const {title, completed} = this.props.data;

        return(
            <li className={completed ? "completed" : ""}>
                <span onClick={this.handleClickToggle.bind(this)}>{title}</span>
                <span onClick={this.handleClickDelete.bind(this)} className="close">x</span>
            </li>
        );
    }

    handleClickToggle() {
        const {data} = this.props;

        this.props.onToggle(data.id);
    }

    handleClickDelete() {
        const {data} = this.props;

        this.props.onDelete(data.id);
    }
}

export default Todo;