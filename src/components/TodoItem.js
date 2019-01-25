import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
 getStyle =() => {
   return{
     background: '#f4f4f4',
     padding: '10px',
     borderBottom: '1px #ccc dotted',
     textDecoration: this.props.todoone.completed ?
     'line-through' : 'none'
   }
 }
  render() {

    const { id, title} = this.props.todoone
    return (
      <div style = {this.getStyle()}>
        <p>
      <input type ="checkbox" onChange={this.props.markComplete.bind(this, id)}  />{''}
      
      <button onClick={this.props.delTodo.bind(this,id)} style={btnstyle}>X</button>
        {this.props.todoone.title }
        </p>
      </div>
    )
  }
}
TodoItem.propTypes={
    todoone: PropTypes.object.isRequired
  }
  
export default TodoItem
const btnstyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'

}