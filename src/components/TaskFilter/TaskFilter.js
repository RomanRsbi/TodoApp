import React from 'react';
import PropTypes from 'prop-types';
import './TaskFilter.css';

export default function TasksFilter({ clickActive, buttonType }) {
  return (
    <ul className="filters">
      <li>
        <button
          onClick={(e) => {
            clickActive(e.target.textContent);
          }}
          className={buttonType === 'All' ? 'selected' : null}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            clickActive(e.target.textContent);
          }}
          className={buttonType === 'Active' ? 'selected' : null}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            clickActive(e.target.textContent);
          }}
          className={buttonType === 'Completed' ? 'selected' : null}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  clickActive: PropTypes.func.isRequired,
  buttonType: PropTypes.string.isRequired,
};
