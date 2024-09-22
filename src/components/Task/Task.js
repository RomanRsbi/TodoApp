import React from 'react';

import './Task.css'

export default class Task extends React.Component {

	state = {
		completed: false
	}

	onCheckboxClick = () => {
		this.setState((state) => {
			return {
				completed: !state.completed
			};
		});
	}

	render() {
		const { completed } = this.state;
		let classNames = this.props.cl;

		if (completed) {
			classNames += ' completed';
		}

		return (
		<li key={ this.props.id } className={ classNames }>
		<div className="view">
			<input className="toggle" type="checkbox" onClick={ this.onCheckboxClick }></input>
			<label>
				<span className="description">{ this.props.label }</span>
				<span className="created">created 5 minutes ago</span>
			</label>
			<button className="icon icon-edit"></button>
			<button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
		</div>
		<input type="text" className="edit" defaultValue='New task'></input>
		</li>
		);
	};
};