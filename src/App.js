import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state = {
      
      tasks: []

    }
  }

  addTodo = (event, taskName) => {

    event.preventDefault(); 
    
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })

    console.log(newTask)

  }

  // using an arrow function will "auto-bind"
  // the `this` keyword to this method for us
  toggleItem = (event, itemId) => {
  
    event.preventDefault()

    this.setState({
      // loop over each item in array and alter it
      // if it matches the passed itemId
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            // merge existing item with new values below
            ...item,
            // "toggle" the boolean value or set it to
            // opposite what it currently is
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }


  clearDone = event => {
    event.preventDefault()

    this.setState({
      // filter out all groceries that are purchased
      tasks: this.state.tasks.filter(item => {
        // this is the same as:
        // item.purchased === false
        return !item.completed
      })
    })
  }

  
  render() {

    console.log(this.state.tasks, 'app')

    return (
      <div>
        <h2>My Todo App!</h2>

        <ToDoList 
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          
        />

        <TodoForm 
          addTodo={this.addTodo}
          clearDone={this.clearDone} 
          
        />

      </div>
    );
  }
}

export default App;
