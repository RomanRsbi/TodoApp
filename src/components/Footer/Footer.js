import React from 'react';

import TasksFilter from '../TaskFilter/TaskFilter';
import './Footer.css'

export default function Footer ( {active, clickActive, buttonType, deleteAll} ) {

	let textInfo = '';
	if(active === 0) {
		textInfo += 'no active tasks';
	} else {
		textInfo += `${active} items left`;
	}

	return (
		<footer className='footer'>
		<span className="todo-count">{textInfo}</span>
		<TasksFilter 
			clickActive={clickActive}
			buttonType={buttonType}/>
    <button className="clear-completed" onClick={deleteAll}>Clear completed</button>
		</footer>
	);
};