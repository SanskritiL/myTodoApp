import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import Header from './components/layout/Header';

class App extends Component {
state={
  todos: [
    {
      id: 1,
      title: 'Clean the dishes',
      completed: false
    },
    {
      id: 2,
      title: 'Go to bank',
      completed: false 
    },
    {
      id: 3,
      title: 'Submit the assignment',
      completed: false
    }
  ]
}


markComplete =(id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  });
}


delTodo =(id)=>{
  this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  })
}

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      <div classname="container">
      <Header />
      <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      
      </div>
    ); 
  }
}

export default App;
