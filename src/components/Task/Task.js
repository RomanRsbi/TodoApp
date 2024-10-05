import React, {Component} from 'react';

import './Task.css'

export default class Task extends Component {

	state = {
		label: ''
	};

	onEditChange = (event) => {
		this.setState({
			label: event.target.value
		});
	};

	onEditSubmit = (event) => {
		if (event.key === 'Enter') {
			if (this.state.label !== '') {
				this.props.editSubmit(this.state.label);
			};
		}
	};
	
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
		<li className={ classNames } id={this.props.id}>
		<div className="view">
			<input className="toggle" type="checkbox" onClick={ this.props.onCheckCompleted }></input>
			<label>
				<span className="description">{ this.props.label }</span>
				<span className="created">created 5 minutes ago</span>
			</label>
			<button className="icon icon-edit" onClick={this.props.editTask}></button>
			<button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
		</div>
		<input type="text" className="edit" defaultValue={ this.props.label } 
		onKeyDown={this.onEditSubmit}
		onChange={this.onEditChange}></input>
		</li>
		);
	};
};