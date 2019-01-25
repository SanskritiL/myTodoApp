import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {

  render() {

    return this.props.todos.map((todoone) => (

      <TodoItem key={todoone.id} todoone={todoone} markComplete ={this.props.markComplete} delTodo={this.props.delTodo}/>
    )

    );
  }
}
//PropTypes
Todos.propTypes={
  todos: PropTypes.array.isRequired
}

export default Todos;
