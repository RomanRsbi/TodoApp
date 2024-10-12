import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  onAddTask = this.props.onAddTask;

  state = {
    label: '',
  };

  static defaultProps = {
    onAddTask: () => {},
  };

  static propTypes = {
    onAddTask: PropTypes.func,
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmitFn = (event) => {
    event.preventDefault();
    if (this.state.label !== '') {
      this.onAddTask(this.state.label);
    }
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmitFn}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </header>
    );
  }
}
