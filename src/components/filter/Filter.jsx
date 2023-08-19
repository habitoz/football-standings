import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

function Filter({ filterHandler }) {
  return (
    <div>
      <input className="filterInput" onChange={($e) => filterHandler($e.target.value)} type="text" />
    </div>
  );
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default Filter;
