import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // call the setter function with the new value.
    // function is given to us through props in
    // the parent component.
    this.props.addTodo(event, this.state.value)

    // reset the input field so we can add other items
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="...todo"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
        <button onClick={this.props.clearDone}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;