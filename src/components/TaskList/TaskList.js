import React from 'react';

import Task from '../Task/Task';
import './TaskList.css'

const TaskList = ( {todos, onDeleted} ) => {

	const el = todos.map((item) => {
		return (
			<Task 
			{ ...item }
			onDeleted={() => onDeleted(item.id)}
			/>
		);
	});

	return (
		<ul className='todo-list'>
			{ el }
		</ul>
	);
};

export default TaskList;