import React from 'react';

import Task from '../Task/Task';
import './TaskList.css'

const TaskList = () => {
	return (
		<ul className='todo-list'>
			<Task label="Completed task" cl="completed"/>
			<Task label="Editing task" cl="editing"/>
			<Task label="Active task"/>
		</ul>
	);
};

export default TaskList;