import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  render() {
    return (
      <div style = {{ backgroundColor: '#1E90FF' }}>
        <p>{this.props.todoone.title }</p>
      </div>
    )
  }
}
TodoItem.propTypes={
    todoone: PropTypes.object.isRequired
  }
  
export default TodoItem
