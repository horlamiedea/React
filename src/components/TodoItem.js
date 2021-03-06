import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderButtom: '1px #cc dotted',
        textDecoration: this.props.todo.completed ? "line-through" : "none"

    };
  };

//   markComplete(e) {
//       console.log(this.props)
//   }

  // we can also use the => function without the .bind(this)
  // it will be like this :
  //martComplete = (e) => {
  //    console.log(this.props)
  //}
  render() {
      const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}
//prop//
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}


export default TodoItem
