import React, { Component } from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './app.css';

export default class App extends Component {

	state = {
		taskData: [
			{ label: "Completed task", id: 1 },
			// { label: "Editing task", cl: "editing", id: 2 },
			{ label: "Active task", id: 3 },
			{ label: "New Task", id: 4 }
		]
	}

	deleteTask = (id) => {
		this.setState(( {taskData} ) => {
			const indx = taskData.findIndex((el) => el.id === id);
			const newArr = [
				...taskData.slice(0, indx), 
				...taskData.slice(indx + 1)
			];

			return {
				taskData: newArr
			};
		});
	};

	render() {
		return (
			<section className='todoapp'>
			<NewTaskForm/>
			<section className='main'>
			<TaskList todos={this.state.taskData} 
			onDeleted={  (id) => this.deleteTask(id) }/>
			<Footer/>
			</section>
		</section>
		);
	}
};



