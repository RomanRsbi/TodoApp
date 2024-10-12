import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import './Task.css';

export default class Task extends Component {
  editSubmit = this.props.editSubmit;
  editTask = this.props.editTask;
  onCheckCompleted = this.props.onCheckCompleted;
  onDeleted = this.props.onDeleted;

  state = {
    label: '',
    data: new Date(),
  };

  static propTypes = {
    editSubmit: PropTypes.func,
    editTask: PropTypes.func,
    onCheckCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
  };

  onEditChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onEditSubmit = (event) => {
    if (event.key === 'Enter') {
      if (this.state.label !== '') {
        this.editSubmit(this.state.label);
      }
    }
  };

  timeRef = setInterval(() => {
    this.setState(() => {
      return {
        data: new Date(),
      };
    });
  }, 5000);

  render() {
    let classNames = this.props.className;

    if (this.props.completed && classNames === null) {
      classNames = 'completed';
    } else {
      if (this.props.completed && classNames !== null) {
        classNames += ' completed';
      }
    }

    return (
      <li className={classNames} id={this.props.id}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.onCheckCompleted}></input>
          <label>
            <span className="description">{this.props.label}</span>
            <span className="created">{formatDistance(this.props.date, new Date(), { includeSeconds: true })}</span>
          </label>
          <button className="icon icon-edit" onClick={this.editTask}></button>
          <button className="icon icon-destroy" onClick={this.onDeleted}></button>
        </div>
        <input
          type="text"
          className="edit"
          defaultValue={this.props.label}
          onKeyDown={this.onEditSubmit}
          onChange={this.onEditChange}
        ></input>
      </li>
    );
  }
}
