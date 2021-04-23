import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      newTask: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRemove() {
    this.props.remove(this.props.id);
  }
  handleEdit() {
    this.setState({ edit: true });
  }
  handleChange(event) {
    this.setState({ newTask: event.target.value });
  }
  handleCompletion() {
    this.props.complete(this.props.id);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.edit(this.props.id, this.state.newTask);
    this.setState({ edit: false });
  }
  render() {
    let { provided, innerRef } = this.props;
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={innerRef}
      >
        {this.state.edit ? (
          <form className="TodoItem-edit" onSubmit={this.handleSubmit}>
            <input value={this.state.newTask} onChange={this.handleChange} />
            <button>
              <i className="fa fa-check"></i>
            </button>
          </form>
        ) : (
          <div className="TodoItem">
            <div>
              <span className="fas fa-grip-horizontal"></span>
              <label
                htmlFor={this.props.id}
                className={` container ${
                  this.props.completed ? "checked" : ""
                }`}
              >
                <span>{this.props.task}</span>
                <input
                  id={this.props.id}
                  type="checkbox"
                  onClick={this.handleCompletion}
                  checked={this.props.checked}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <button onClick={this.handleEdit}>
                <i className="fa fa-pencil"></i>
              </button>
              <button onClick={this.handleRemove}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TodoItem;
