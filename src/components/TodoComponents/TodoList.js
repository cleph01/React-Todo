// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
        tasks: props.tasks
    }

    console.log(this.state.tasks, 'todoList')
  }

  

  render() {
    
    return (
        <div>

        {this.props.tasks.map(item => (
            <Todo
              key={item.id}
              item={item}
              onClick={(e) => this.props.toggleItem(e, item.id)}
            />
          ))}

        </div>
    );
  }
}

export default TodoList;
