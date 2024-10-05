import React from 'react';

import Task from '../Task/Task';
import './TaskList.css'

export default function TaskList ( {todos, onDeleted, onCheckCompleted, editTask, editSubmit} ) {

	const el = todos.map((item) => {
		return (
			<Task 
			{ ...item }
			key={item.id}
			onDeleted={() => onDeleted(item.id)}
			onCheckCompleted={() => onCheckCompleted(item.id)}
			editTask={(event) => editTask(item.id)}
			editSubmit={(text) => editSubmit(item.id, text)}/>
		);
	});

	return (
		<ul className='todo-list'>
			{ el }
		</ul>
	);
};