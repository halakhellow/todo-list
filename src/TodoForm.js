import React, { Component } from "react";
import uuid from "react-uuid";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handelChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.add({ task: this.state.todo, id: uuid(), completed: false });
    this.setState({ todo: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="TodoForm">
        <input
          placeholder="Add new task .."
          value={this.state.todo}
          onChange={this.handelChange}
        />
        <button>+</button>
      </form>
    );
  }
}

export default TodoForm;
