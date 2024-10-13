import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({ todos, onDeleted, onCheckCompleted, editTask, editSubmit }) {
  const el = todos.map((item) => (
    <Task
      {...item}
      key={item.id}
      onDeleted={() => onDeleted(item.id)}
      onCheckCompleted={() => onCheckCompleted(item.id)}
      editTask={() => editTask(item.id)}
      editSubmit={(text) => editSubmit(item.id, text)}
    />
  ));

  return <ul className="todo-list">{el}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onCheckCompleted: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  editSubmit: PropTypes.func.isRequired,
};
