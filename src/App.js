import React, { Component } from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './app.css';

export default class App extends Component {
  maxId = 1;

  state = {
    taskData: [],
    buttonType: 'All',
  };

  filterFn = (text = 'All') => {
    this.setState(({ taskData }) => {
      const newArr = taskData.map((el) => {
        if (text === 'Active') {
          if (el.completed === true) {
            el.className = 'hidden';
            return el;
          }
          el.className = null;
          return el;
        }
        if (text === 'Completed') {
          if (el.completed === false) {
            el.className = 'hidden';
            return el;
          }
          el.className = null;
          return el;
        }
        el.className = null;
        return el;
      });
      return {
        taskData: newArr,
      };
    });
  };

  clickActive = (typeName) => {
    this.filterFn(typeName);
    this.setState(() => ({
      buttonType: typeName,
    }));
  };

  createTodoTask(label) {
    return {
      label,
      className: null,
      completed: false,
      id: this.maxId++,
      date: new Date(),
    };
  }

  deleteTask = (id) => {
    this.setState(({ taskData }) => {
      const indx = taskData.findIndex((el) => el.id === id);
      const newArr = [...taskData.slice(0, indx), ...taskData.slice(indx + 1)];
      return {
        taskData: newArr,
      };
    });
  };

  addTask = (text) => {
    const newTask = this.createTodoTask(text);

    this.setState(({ taskData }) => {
      const newArr = [...taskData, newTask];
      return {
        taskData: newArr,
      };
    });
  };

  editTask = (id) => {
    this.setState(({ taskData }) => {
      const indx = taskData.findIndex((el) => el.id === id);
      const oldData = taskData[indx];
      const newData = { ...oldData, className: 'editing' };
      const newArr = [...taskData.slice(0, indx), newData, ...taskData.slice(indx + 1)];
      return {
        taskData: newArr,
      };
    });
  };

  editSubmit = (id, text) => {
    this.setState(({ taskData }) => {
      const indx = taskData.findIndex((el) => el.id === id);
      const oldData = taskData[indx];
      const newData = { ...oldData, className: null, label: text };
      const newArr = [...taskData.slice(0, indx), newData, ...taskData.slice(indx + 1)];
      return {
        taskData: newArr,
      };
    });
  };

  checkCompleted = (id) => {
    this.setState(({ taskData }) => {
      const indx = taskData.findIndex((el) => el.id === id);
      const oldData = taskData[indx];
      const newData = { ...oldData, completed: !oldData.completed };
      const newArr = [...taskData.slice(0, indx), newData, ...taskData.slice(indx + 1)];
      return {
        taskData: newArr,
      };
    });
  };

  deleteAll = () => {
    this.setState(({ taskData }) => {
      const newArr = taskData.filter((el) => el.completed === false);
      return {
        taskData: newArr,
      };
    });
  };

  render() {
    const activeCount = this.state.taskData.filter((el) => el.completed === false).length;

    return (
      <section className="todoapp">
        <NewTaskForm onAddTask={this.addTask} />
        <section className="main">
          <TaskList
            todos={this.state.taskData}
            onDeleted={(id) => this.deleteTask(id)}
            onCheckCompleted={this.checkCompleted}
            editTask={this.editTask}
            editSubmit={this.editSubmit}
          />
          <Footer
            active={activeCount}
            clickActive={this.clickActive}
            buttonType={this.state.buttonType}
            deleteAll={this.deleteAll}
          />
        </section>
      </section>
    );
  }
}
