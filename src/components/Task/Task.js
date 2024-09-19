import React from 'react';

import './Task.css'

const Task = (props) => {
	return (
		<li className={ props.cl }>
			<div className="view">
				<input className="toggle" type="checkbox"></input>
				<label>
					<span className="description">{ props.label }</span>
					<span className="created">created 5 minutes ago</span>
				</label>
				<button className="icon icon-edit"></button>
				<button className="icon icon-destroy"></button>
			</div>
			<input type="text" className="edit" value="Editing task"></input>
		</li>
	);
};

export default Task;