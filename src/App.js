import React from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './app.css';

const App = () => {
	return (
		<section className='todoapp'>
		<NewTaskForm/>
		<section className='main'>
		<TaskList/>
		<Footer/>
		</section>
	</section>
	);
};

export default App;


